import React, { useState,useRef,useEffect } from "react";
import ContactForm from "./ContactForm";

function ContactUsPage() {
  const [formData,setFormData] = useState({
    fname:"",
    email:"",
    message:"",
    subject:""
  });
  const textareaRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
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
  
  return (
    <>
      <section className="mt-[85px] bg-white  ">
        <ContactForm/>
      </section>
    </>
  );
}

export default ContactUsPage;
