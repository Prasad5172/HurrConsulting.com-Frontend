import React, { useState, useRef, useEffect } from "react";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toastFailed } from "../Util/ToastFunctions";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";

// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const AppointmentForm = ({ setClientSecret, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [openPaymentPage, setOpenPaymentPage] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    phone: "",
    problem: "",
    date: "",
    slot: null,
  });
  const textareaRef = useRef(null);

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const [timeSlots, setTimeSlots] = useState([
    "11:00 AM - 12:00 AM",
    "12:00 AM - 01:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.slot) {
      return toastFailed("Select Slot For Appointment");
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/create-payment-intent`,
        formData
      );
      const { clientSecret } = response.data;
      setClientSecret(clientSecret); // Update parent component's state with clientSecret
      setOpenPaymentPage(true);
    } catch (error) {
      console.log(error);
      toastFailed(error.message);
    }
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsProcessing(false);
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
        {!openPaymentPage  ? (
          <div className="payment-form">
              <form id="payment-form" onSubmit={handlePayment}>
                <PaymentElement id="payment-element" />
                <button
                  disabled={isProcessing || !stripe || !elements}
                  id="submit"
                >
                  <span id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                  </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
              </form>
          </div>
        )
        :
        (
          <div>
            <p className="text-center font-bold 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl">
              Book an appointment
            </p>
            <div>
              <form
                className="2xl:max-w-3xl xl:max-w-3xl lg:max-w-3xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto mt-20 "
                onSubmit={handleSubmit}
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
                    for="email"
                    className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6  mt-10">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="on"
                    />
                    <label
                      for="firstname"
                      className="peer-focus:font-medium absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group lg:mt-0 2xl:mt-0 xl:mt-0 md:mt-0 mt-5 ">
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
                      for="floating_phone"
                      className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (123-456-7890)
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group mt-10">
                  <textarea
                    ref={textareaRef}
                    name="problem"
                    id="problem"
                    className="block p-5 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    rows={6}
                  ></textarea>
                  <label
                    for="problem"
                    className="peer-focus:font-medium absolute text-xl text-gray-500  duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Type Your Problem Here :
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
                      for="firstname"
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
                <button
                  type="submit"
                  className="mt-10 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>
        ) 
        }
      </div>
    </>
  );
};

const AppointmentPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: "light",
  };

  const options = {
    clientSecret,
    appearance,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <AppointmentForm
        setClientSecret={setClientSecret}
        clientSecret={clientSecret}
      />
    </Elements>
  );
};

export default AppointmentPage;
