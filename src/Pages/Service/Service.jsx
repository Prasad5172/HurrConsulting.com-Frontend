import React, { useEffect } from "react";
import "./Service.css";
import SimpleSlider from "./SimpleSlider";

function Service() {
  return (
    <>
      <div className="pt-[80px] dark:bg-[#292929] font-serif">
        <div>
          <header
            id="page-header"
            className="page-header overlay"
            style={{
              background: "url('page-header-bg-services.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="container service">
              <div className="section-header">
                <div className="row">
                  <div className=" 2xl:max-w-fit xl:max-w-fit lg:max-w-fit md:max-w-fit w-full ">
                    <p className=" page-title 2xl:text-[65px] xl:text-[50px] lg:text-[40px] md:text-[40px] text-[35px]">
                      Our <span>Quality</span> Services{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex justify-center">
            <div className="container 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px]">
              <div className="2xl:p-4 xl:p-4 lg:p-4 md:p-4 p-6 mb-4">
                <p className=" text-[40px] text-gray-400 font-extrabold">
                  Our Services
                </p>
                <p className=" mt-4 text-md dark:text-[#e0e0e0]">
                  At Hurr Consulting, we are dedicated to providing expert legal guidance tailored to your unique needs. Our approach is client-centric, focusing on delivering clear, actionable advice to empower you in making informed decisions. Whether you're navigating complex employment matters or seeking thorough assessments of legal agreements, our experienced team is here to help.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="container 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[650px]">
              <SimpleSlider slidesToShow={3} at1250={2} />
            </div>
          </div>
         

            {/*  */}
          
          <div className="flex justify-center ">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-3 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold  mb-4 2xl:leading-normal xl:leading-normal lg:leading-normal md:leading-tight leading-normal dark:text-white">Our Services: Expert Review of Settlement Agreements and COT3</p>
                  <p className=" 2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[18px] dark:text-[#e0e0e0]">Navigating the complexities of Settlement Agreements and COT3 can be challenging. Our team of experienced employment law specialists are here to help. We offer comprehensive services to review and advise on these agreements, ensuring that your rights are protected and that you fully understand the terms and implications.</p>
                </div>
                <div className="2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-semibold mb-3 dark:text-white">What We Offer:</p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Detailed Review:</span> <span className="text-[17px] dark:text-[#e0e0e0]">Thorough examination of the terms and conditions to ensure fairness and compliance with legal standards.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Expert Advice:</span> <span className="text-[17px] dark:text-[#e0e0e0]"> Often includes clauses that prevent both parties from disclosing the terms of the agreement or the circumstances leading to it.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">No Need for Legal Advice:</span> <span className="text-[17px] dark:text-[#e0e0e0]">Unlike settlement agreements, independent legal advice is not mandatory, although it may still be beneficial.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Quick Resolution:</span> <span className="text-[17px] dark:text-[#e0e0e0]">Often results in a quicker settlement compared to going through a tribunal.</span> </li>
                  </ul>
                  <p className="mb-3  leading-normal text-[18px] dark:text-[#e0e0e0]">Whether you're an employee or an employer, our expert team is here to provide the guidance and support you need to navigate Settlement Agreements and COT3 effectively. Contact us today to learn more about how we can assist you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg ">
              <div className="m-5 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold  mb-2 dark:text-white">Case Assessment</p>
                  <p className="2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[18px] mb-4 dark:text-[#e0e0e0]">Navigating the complexities of employment law can be daunting, whether you're an employee or an employer. At Hurr Consulting we offer comprehensive Case Assessments to help you understand the strength and viability of your case before you proceed with legal action. Our goal is to provide you with a clear, objective evaluation, empowering you to make informed decisions.</p>
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-2 dark:text-white">What is a Case Assessment?</p>
                  <p className="2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal text-[18px] dark:text-[#e0e0e0]">A Case Merits Assessment is an in-depth review and analysis of your employment-related issue by our experienced legal team. This service is designed to evaluate the potential success of your case based on the facts you provide and applicable legal principles. It helps in identifying the strengths, weaknesses, opportunities, and risks involved in pursuing legal action.</p>
                </div>
                <div className="2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 dark:text-white">Who Can Benefit from a Case Assessment?</p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Employees: </span> <span className="text-[17px] dark:text-[#e0e0e0]">If you believe you have been wrongfully terminated, discriminated against, harassed, or otherwise treated unfairly in your workplace, a Case Merits Assessment can help you understand the potential merits of your claims. </span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Employers: </span> <span className="text-[17px] dark:text-[#e0e0e0]"> If you are facing a claim or anticipate a dispute with an employee, a Case Merits Assessment can help you assess the situation and develop a strategic response.</span> </li>
                  </ul>
                </div>
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 dark:text-white">Our Assessment Process</p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Initial Consultation: </span> <span className="text-[17px] dark:text-[#e0e0e0]">We begin with a thorough consultation to understand the details of your situation. This includes gathering all relevant documentation and discussing the circumstances surrounding your case.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Detailed Analysis: </span> <span className="text-[17px] dark:text-[#e0e0e0]"> Our legal experts will conduct a meticulous review of the information provided. This involves analysing employment contracts, company policies, communications, and any other pertinent evidence.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Legal Research: </span> <span className="text-[17px] dark:text-[#e0e0e0]">We will research relevant laws, regulations, and precedents that apply to your case. This ensures that our assessment is grounded in the most current legal standards.</span> </li>
                    <li className="mb-3 dark:text-white">
                      <p>
                        <span className="font-bold text-[19px] dark:text-white">Evaluation Report: </span> <span className="text-[17px] dark:text-[#e0e0e0]">You will receive a detailed report outlining the merits of your case. This report will include:</span> 
                      </p>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white"><span className="text-[17px] dark:text-[#e0e0e0]">An overview of the key facts and evidence.</span> </li>
                        <li className="mb-3 dark:text-white"><span className="text-[17px] dark:text-[#e0e0e0]">An analysis of legal principles and how they apply to your situation.</span> </li>
                        <li className="mb-3 dark:text-white"><span className="text-[17px] dark:text-[#e0e0e0]">An assessment of the strengths and weaknesses of your case.</span> </li>
                        <li className="mb-3 dark:text-white"><span className="text-[17px] dark:text-[#e0e0e0]">Potential outcomes and recommendations for next steps.</span> </li>
                      </ul>
                    </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Strategic Guidance: </span> <span className="text-[17px] dark:text-[#e0e0e0]">Based on our findings, we will provide strategic advice on how to proceed. This may include options for negotiation, settlement, or litigation.</span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>




          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col  mb-5 rounded-lg pt-10">
              <div className="m-5 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold  mb-2 dark:text-white">Why Choose Us?</p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Expertise:</span> <span className="text-[17px] dark:text-[#e0e0e0]">Our team comprises seasoned employment law attorneys with extensive experience in handling a wide range of employment disputes.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Objectivity:</span> <span className="text-[17px] dark:text-[#e0e0e0]"> We provide an unbiased assessment aimed at giving you a realistic perspective of your case.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Confidentiality:</span> <span className="text-[17px] dark:text-[#e0e0e0]">Your privacy is paramount. All consultations and assessments are conducted with the utmost confidentiality.</span> </li>
                    <li className="mb-3 dark:text-white"><span className="font-bold text-[19px] dark:text-white">Empowerment: </span> <span className="text-[17px] dark:text-[#e0e0e0]">With a clear understanding of your case's merits, you can make informed decisions with confidence.</span> </li>
                  </ul>
                  <p className="mb-3  leading-normal text-[18px] dark:text-[#e0e0e0]">Whether you're an employee or an employer, our expert team is here to provide the guidance and support you need to navigate Settlement Agreements and COT3 effectively. Contact us today to learn more about how we can assist you.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col  mb-5 rounded-lg ">
              <div className="m-5 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="px-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold  mb-2 ">Get Started Today</p>
                  <p className=" 2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal text-[18px] ">Understanding the merits of your employment case is crucial for making strategic decisions. Contact us today to schedule your Case Merits Assessment and take the first step toward resolving your employment issue effectively.</p>
                </div>
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold  mb-2 ">Link to Contact</p>
                 <p className="2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal text-[18px] dark:text-[#e0e0e0]">Let Hurr Consulting guide you through the complexities of employment law with clarity and confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
