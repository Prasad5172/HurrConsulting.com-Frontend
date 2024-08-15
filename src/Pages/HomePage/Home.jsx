import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[80px] dark:mt-0">
        <div className="home text-[#666666] dark:text-[#dadada] bg-[#f2f2f2] dark:bg-[#292929] pb-[72px] ">
          <div className="wrapper dark:pt-[80px]  home-section bg-[#f2f2f2] dark:bg-[#292929] text-[#666666] dark:text-white flex justify-center">
            <div className="container pt-[50px] 2xl:max-w-[1100px] xl:max-w-[1100px]  ">
              <div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
                <div className="pb-28 px-[20px] lg:col-span-2 2xl:col-span-2 xl:col-span-2 md:col-span-2">
                  <p
                    className="2xl:text-[62px] xl:text-[60px] lg:text[60px] md:text-[50px] sm:text-[45px] text-[40px] font-bold mb-[20px] text-[#333333] dark:text-[#ffffff]"
                    style={{ lineHeight: "1.1" }}
                  >
                    Hurr Consulting: Empowering Equity
                  </p>
                  
                  <p className="mb-[20px] text-[22px]">
                    Welcome to Hurr Consulting, a leading employment law
                    consultancy dedicated to empowering businesses and
                    individuals with expert legal guidance in the complex realm
                    of employment law.
                  </p>
                  <p className="mb-[20px] text-[20px] font-semibold">
                    See if we can help you or someone you love get justice.
                  </p>
                  <div className="flex 2xl:justify-start xl:justify-start lg:justify-start justify-center ">
                    <button className="arrow relative  glowing-btn" onClick={() => navigate("/appointment")}>
                      <span className="glowing-txt">
                        <span className="faulty-letter mr-2">Book</span>A Free Consultation
                      </span>{" "}
                      <FontAwesomeIcon
                        icon={faLongArrowRight}
                        className="ml-9 arrow-icon transition-transform duration-300 ease-in-out scale-[1]"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex  2xl:justify-center xl:justify-center lg:justify-center justify-end px-5 mt-5 pb-10">
                  <div className="2xl:max-w-[400px] xl:max-w-[400px] lg:max-w-[400px] md:max-w-[400px] max-w-[300px]  ">
                    <img
                      src="about-hero-400x374.webp"
                      className=" "
                      alt="LawyerWithClients"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="container pt-[60px] 2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="grid lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  grid-cols-1">
                <div className="flex justify-center items-end mb-6 2xl:max-w-[400px] xl:max-w-[400px] lg:max-w-[400px] max-w-[300px] mx-auto mt-2">
                  <img src="legal-network.png" alt="Description of image" />
                </div>
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2   pb-16">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-2 text-[#333333] dark:text-white">Legal Expert:</p>
                  <p className="text-[18px] 2xl:text-start xl:text-start lg:text-start text-center">
                    With over{" "}
                    <span className="font-bold ">10 decades of experience</span>{" "}
                    in the legal industry, our lead consultant specialises in
                    navigating the challenges of workplace legalities. We offer
                    tailored solutions in areas such as settlement agreement
                    reviews, dispute resolution, employment contracts, and HR
                    support. Our goal is to safeguard your rights and provide
                    peace of mind, whether you're an employer managing your
                    workforce or an employee facing workplace issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-10 xl:mt-10 lg:mt-10 mt-5">
            <div className="container  2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="grid lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  grid-cols-1">
                <div className="flex justify-center items-end mb-6 2xl:max-w-[400px] xl:max-w-[400px] lg:max-w-[400px] max-w-[300px] mx-auto mt-2 2xl:order-2 xl:order-2 lg:order-2">
                  <img
                    src="gavel.jpg"
                    className="rounded-lg"
                    alt="Description of image"
                  />
                </div>
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2 pb-16 2xl:order-1 xl:order-1 lg:order-1">
                  <p className="text-[18px] 2xl:text-start xl:text-start lg:text-start text-center ">
                    Our Mission We are committed to delivering practical,
                    actionable advice that aligns with your specific needs. By
                    understanding the intricacies of employment law, we aim to
                    create compliant, fair, and productive workplaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center 2xl:mt-10 xl:mt-10 lg:mt-10 mt-5">
            <div className="container 2xl:max-w-[1100px] xl:max-w-[1100px] flex">
              <div className="grid lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  grid-cols-1">
                <div className="flex justify-center items-end mb-6 2xl:max-w-[400px] xl:max-w-[400px] lg:max-w-[400px] max-w-[300px] mx-auto mt-2 2xl:order-1 xl:order-1 lg:order-1">
                  <img
                    src="approach.png"
                    className="rounded-lg"
                    alt="Description of image"
                  />
                </div>
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2  2xl:order-2 xl:order-2 lg:order-2">
                  <p className="text-lg 2xl:text-start xl:text-start lg:text-start text-center">
                    Our Approach We pride ourselves on a client-centric
                    approach, focusing on clear communication, timely responses,
                    and a deep understanding of your unique situation. Our
                    consultancy blends legal acumen with practical business
                    sense, ensuring that our solutions are not just legally
                    sound but also strategically beneficial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* list of values */}
          <div className="flex justify-center">
            <div className="container  2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="p-6">
                <div className="">
                  <div className="">
                    <p className="font-bold text-center mb-5 text-[30px] text-[#333333] dark:text-white">Our Values:</p>
                    <ul>
                      <li
                        className="card"
                        style={{ color: "#ececec", backgroundColor: "#e98b43" }}
                      >
                        <div className="icon">
                          <img
                            className="rounded-lg w-[100px]"
                            src="integrity.jpg"
                            alt="Integrity"
                          />
                        </div>
                        <div>
                          <div className="social-title max-w-[700px]">
                            Integrity
                          </div>
                          <div className="content ">
                            We uphold the highest ethical standards in all our
                            interactions.
                          </div>
                        </div>
                      </li>
                      <li
                        className="card"
                        style={{ color: "#ececec", backgroundColor: "#C23D2A" }}
                      >
                        <div className="icon">
                          <img
                            className="rounded-lg w-[100px]"
                            src="excellence.jpg"
                            alt="Excellence"
                          />
                        </div>
                        <div>
                          <div className="social-title">Excellence</div>
                          <div className="content">
                            We strive for exceptional quality in our services
                            and advice.
                          </div>
                        </div>
                      </li>
                      <li
                        className="card"
                        style={{ color: "#ececec", backgroundColor: "#842C2A" }}
                      >
                        <div className="icon">
                          <img
                            className="rounded-lg w-[100px]"
                            src="innovation.jpg"
                            alt="Innovation"
                          />
                        </div>
                        <div>
                          <div className="social-title">Innovation</div>
                          <div className="content">
                            We leverage the latest legal developments and
                            technology to provide cutting-edge solutions.
                          </div>
                        </div>
                      </li>
                      <li
                        className="card"
                        style={{ color: "#ececec", backgroundColor: "#022F46" }}
                      >
                        <div className="icon">
                          <img
                            className="rounded-lg w-[100px]"
                            src="empathy.jpg"
                            alt="Empathy"
                          />
                        </div>
                        <div>
                          <div className="social-title">Empathy</div>
                          <div className="content">
                            {" "}
                            We listen actively and respond with care
                            andunderstanding.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center 2xl:mt-10 xl:mt-10 lg:mt-10 mt-5">
            <div className="container 2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="">
                {/* <div className="flex justify-center items-end mb-5 max-w-[400px] mx-auto mt-2">
                  <img
                    src="team1-white.jpg"
                    className="rounded-xl 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[400px] max-w-[380px] h-[400px]"
                    alt="Description of image"
                  />
                </div> */}
                <div className="px-[40px] pb-8 flex justify-center flex-col items-center">
                  <div className="">
                    <p className="text-2xl font-semibold  text-center mb-3 text-[#333333] dark:text-white">Meet Our Consultant</p>
                    <p className="text-[18px] max-w-[600px] text-center">
                      Masumah Akbar is a seasoned legal expert committed to equity
                      and justice. With extensive experience representing both
                      respondents and claimants in Employment Tribunal cases,
                      Masumah has developed a specialization in workplace
                      discrimination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container 2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="p-12">
                <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 text-center text-[#333333] dark:text-white">
                  Why Choose Us?
                </p>
                <p className="text-[18px] text-center">
                  At Hurr Consulting, we believe in building lasting
                  relationships through trust, expertise, and a proactive
                  approach to legal challenges. Whether you're seeking to
                  resolve a workplace dispute, ensure compliance, or strengthen
                  your employment practices, we're here to help you every step
                  of the way. Explore our services or contact us today to learn
                  how we can assist you in navigating the complexities of
                  employment law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
