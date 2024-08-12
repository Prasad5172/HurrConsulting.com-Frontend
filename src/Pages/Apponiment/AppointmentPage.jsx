import React, { useState, useRef, useEffect, useContext } from "react";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toastFailed, toastSuccess } from "../../Util/ToastFunctions";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../context/AuthContext";
import { Tooltip, Button } from "@material-tailwind/react";


const AppointmentPage = () => {
  const {isAuthenticated,setIsLoading} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    description:"",
    summary: "",
    date: "",
    slot: null,
  });
  const textareaRef = useRef(null);
  
  const [timeSlots, setTimeSlots] = useState([
    "11:00",
    "12:00",
    "15:00",
    "16:00",
  ]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };
      adjustHeight();
      textarea.addEventListener("input", adjustHeight);
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, []);
  const handleRemoveSlot = () => {
    setFormData((prev) => ({
      ...prev,
      slot: null,
    }));
  };
  function convertTo12HourFormat(time) {
      const [hours, minutes] = time.split(':').map(Number);
      let period = 'AM';
      let adjustedHours = hours;
      
      if (hours === 0) {
        adjustedHours = 12;
      } else if (hours === 12) {
        period = 'PM';
      } else if (hours > 12) {
        adjustedHours = hours - 12;
        period = 'PM';
      } else {
        period = 'AM';
      }
      // Format to ensure two digits for minutes
      const formattedMinutes = minutes.toString().padStart(2, '0');
      
      return `${adjustedHours}:${formattedMinutes} ${period}`;
  }
  
  const handleAppoinment = async (event) => {
    console.log("handleAppoinment")
    event.preventDefault();
    // appoinment code
    if(!isAuthenticated) {
      toastFailed("Signin to Book Appoinmentment");
      return 
    }
    setIsLoading(true);
    const body = {
      event:{
        email:formData.email,
        name: formData.name,
        phone:formData.phone,
        description:formData.description,
        summary:formData.summary,
        start :`${formData.date}T${formData.slot}:00`,
        end :`${formData.date}T${addOneHour(formData.slot)}:00`
      }
    }
    console.log(body);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/event`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      console.log(data);
      if(response.ok){
        toastSuccess("Appointment is Booked");
      }else{
        toastFailed("failed to book Appoinment")
      }
      
    } catch (error) {
      console.log(error);
      toastFailed(error.message);
    }
    setFormData({
      email: "",
      name: "",
      phone: "",
      description:"",
      summary: "",
      date: "",
      slot: null,
    });
    setIsLoading(false);
  };  
  const addOneHour = (startTime) => {
    // Parse the start time into hours and minutes
    const [hours, minutes] = startTime.split(':').map(Number);

    // Create a Date object using the start time
    const startDate = new Date();
    startDate.setHours(hours, minutes, 0, 0); // Set hours, minutes, and reset seconds and milliseconds

    // Add one hour
    startDate.setHours(startDate.getHours() + 1);

    // Format the end time as HH:MM
    const endHours = String(startDate.getHours()).padStart(2, '0');
    const endMinutes = String(startDate.getMinutes()).padStart(2, '0');

    return `${endHours}:${endMinutes}`;
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 14); // Add 14 days
    const yyyy = maxDate.getFullYear();
    const mm = String(maxDate.getMonth() + 1).padStart(2, "0");
    const dd = String(maxDate.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <>
      <div className="mt-[100px] mb-10">

          <div>
            <p className="text-center font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl">
              Book an appointment
            </p>
            <div>
              <form
                className="2xl:max-w-3xl xl:max-w-3xl lg:max-w-3xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto mt-20 "
                onSubmit={handleAppoinment}
              >
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    autoComplete="on"
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6  mt-10">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="on"
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5  group lg:mt-0 2xl:mt-0 xl:mt-0 mt-5 ">
                    <InputMask
                      mask="(999)999-9999"
                      value={formData.phone}
                      onChange={handleInputChange}
                    >
                      {(inputProps) => (
                        <input
                          {...inputProps}
                          type="tel"
                          id="phone"
                          name="phone"
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-non  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        />
                      )}
                    </InputMask>
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (123-456-7890)
                    </label>
                  </div>
                </div>

                <div className="relative z-0 w-full mb-5 mt-5 group">
                  <input
                    type="text"
                    name="summary"
                    id="summary"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={formData.summary}
                    onChange={handleInputChange}
                    autoComplete="on"
                  />
                  <label
                    htmlFor="summary"
                    className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Enter Subject For Appoinment
                  </label>
                </div>
                
                <div className="relative z-0 w-full mb-5 group mt-10">
                  <textarea
                    ref={textareaRef}
                    name="description"
                    id="description"
                    className="block p-5 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    rows={6}
                  ></textarea>
                  <label
                    htmlFor="description"
                    className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Type Your problem Here :
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 mt-10">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="date"
                      name="date"
                      min={getTodayDate()}
                      max={getMaxDate()}
                      id="date"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Date
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group mt-10">
                  <label
                    htmlFor="time_slots"
                    className="  text-lg text-gray-500 mr-3"
                  >
                    Available Time Slots :
                  </label>
                  {formData.slot && (
                    <div className="break-normal text-[15px] bg-[#a1a1aa] inline-flex rounded-full px-1 py-2.5 justify-center items-center whitespace-nowrap mr-4  hover:bg-stone-300">
                      <span className="text-[15px]">{convertTo12HourFormat(formData.slot)}</span>
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="mx-2 hover:cursor-pointer"
                        onClick={handleRemoveSlot}
                      />
                    </div>
                  )}
                  <hr className="my-5" />
                  <div className="mt-4 flex justify-center  overflow-x-auto">
                    <div className="w-full">
                      {timeSlots.map((slot, index) => (
                        <div
                          key={index}
                          className="break-normal text-[15px] mb-5 bg-[#a1a1aa] inline-flex rounded-full px-1 py-2.5 justify-center items-center whitespace-nowrap mr-4  hover:bg-stone-300"
                        >
                          {convertTo12HourFormat(slot)}
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="mx-2 hover:cursor-pointer"
                            onClick={() =>
                              setFormData((preval) => ({
                                ...preval,
                                ["slot"]: slot,
                              }))
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`mt-10 bg-blue-600 disabled:opacity-50 text-white py-3 px-6 rounded-lg  `}
                  onClick={handleAppoinment}
                >
                  Book Appoinment
                </button>


              </form>
            </div>
          </div>
      </div>
    </>
  );
};

export default AppointmentPage;