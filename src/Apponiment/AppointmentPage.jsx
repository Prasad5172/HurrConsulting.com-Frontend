import React, { useState, useRef, useEffect } from "react";
import InputMask from "react-input-mask";
import "./AppointmentPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toastFailed } from "../Util/ToastFunctions";

function AppointmentPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    phone: "",
    problem: "",
    date: "",
    slot: null,
  });
  const textareaRef = useRef(null);

  const [timeSlots, setTimeSlots] = useState([
    "11:00 AM - 12:00 AM",
    "12:00 AM - 13:00 PM",
    "15:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ]);

  const InputEvent = (event) => {
    // console.log(formdata)
    const { name, value } = event.target;
   
    setFormData((preval) => ({
      ...preval,
      [name]: value,
    }));
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = "auto"; // Reset the height
        textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height
      };
      // Adjust the height on initial render
      adjustHeight();
      // Adjust the height when the input changes
      textarea.addEventListener("input", adjustHeight);
      // Clean up the event listener
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, []);

  const handleRemoveSlot = () => {
    setFormData((preval) => ({
      ...preval,
      ["slot"]: null,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    if (!formData.slot) {
      return toastFailed("Select Sot For Appoinment");
    }
    try {
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + `/api/bookevent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data =await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
      <div className="">
        <div>
          <p className="text-center font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl">
            Book an appointment
          </p>
          <div>
            <form
              class="2xl:max-w-3xl xl:max-w-3xl lg:max-w-3xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto mt-20 "
              onSubmit={handleSubmit}
            >
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  required
                  value={formData.email}
                  onChange={InputEvent}
                  autoComplete="on"
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div class="grid md:grid-cols-2 md:gap-6  mt-10">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={InputEvent}
                    autoComplete="on"
                  />
                  <label
                    for="firstname"
                    class="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group lg:mt-0 2xl:mt-0 xl:mt-0 md:mt-0 mt-5 ">
                  <InputMask
                    mask="(999)999-9999"
                    value={formData.phone}
                    onChange={InputEvent}
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
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number (123-456-7890)
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-5 group mt-10">
                <textarea
                  ref={textareaRef}
                  name="problem"
                  id="problem"
                  className="block p-5 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                  value={formData.problem}
                  onChange={InputEvent}
                  required
                  autoComplete="off"
                  rows={10}
                ></textarea>
                <label
                  for="problem"
                  class="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Type Your Problem Here :
                </label>
              </div>

              <div class="grid md:grid-cols-2 md:gap-6 mt-10">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="date"
                    name="date"
                    min={getTodayDate()}
                    max={getMaxDate()}
                    id="date"
                    class="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={formData.date}
                    onChange={InputEvent}
                  />
                  <label
                    for="firstname"
                    class="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  <div className="break-normal text-[15px] bg-[#a1a1aa] inline-flex rounded-full px-1 py-2.5 justify-center items-center whitespace-nowrap mr-4 hover:cursor-pointer hover:bg-stone-300">
                    <span className="text-[15px]">{formData.slot}</span>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="mx-2"
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
                        className="break-normal text-[15px] mb-5 bg-[#a1a1aa] inline-flex rounded-full px-1 py-2.5 justify-center items-center whitespace-nowrap mr-4 hover:cursor-pointer hover:bg-stone-300"
                      >
                        {slot}
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="mx-2"
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
              <div className="flex justify-center">
                <button
                  type="submit"
                  class="mb-20 mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Book an appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentPage;
