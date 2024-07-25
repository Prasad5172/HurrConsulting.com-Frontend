import React, { useState,useRef,useEffect } from "react";
import ContactForm from "./ContactForm";

function ContactUsPage() {
  const [formData,setFormData] = useState({
    fname:"",
    email:"",
    message:"",
    subject:""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!formData.slot) {
    //   return toastFailed("Select Slot For Appointment");
    // }
    // try {
    //   const response = await axios.post(
    //     `${process.env.REACT_APP_BACKEND_URL}/create-payment-intent`,
    //     formData
    //   );
    //   const { clientSecret } = response.data;
    //   setClientSecret(clientSecret); // Update parent component's state with clientSecret
    //   setOpenPaymentPage(true);
    // } catch (error) {
    //   console.log(error);
    //   toastFailed(error.message);
    // }
  };


  const textareaRef = useRef(null);
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
  return (
    <>
      <section className="mt-[72px] bg-white  ">
        <ContactForm/>
      </section>
    </>
  );
}

export default ContactUsPage;
