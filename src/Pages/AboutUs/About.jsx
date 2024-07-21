import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

function About() {
  return (
    <>
      <div className="mt-[72px] pb-[72px] bg-red-200">
        <div className="wrapper  about-section bg-slate-400 flex justify-center">
          <div className="container pt-[60px] 2xl:max-w-[1100px] xl:max-w-[1100px]  ">
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid-cols-1">
              <div className="pb-16 px-[20px] lg:col-span-2 2xl:col-span-2 xl:col-span-2 md:col-span-2">
                <p
                  className="text-[62px] font-bold mb-[20px]"
                  style={{ lineHeight: "1.1" }}
                >
                  Hurr Consulting: Empowering Equity
                </p>
                <p className="mb-[20px] text-[20px]">
                  Welcome to Hurr Consulting, a leading employment law
                  consultancy dedicated to empowering businesses and individuals
                  with expert legal guidance in the complex realm of employment
                  law.
                </p>
                <p className="mb-[20px] text-[20px] font-semibold">
                  See if we can help you or someone you love get justice.
                </p>
                <button className="arrow p-5 bg-[#05a51f] rounded-lg hover:underline book-appointment relative overflow-hidden">
                  <span className="text-[20px]">Book an Appointment</span>
                  <FontAwesomeIcon
                    icon={faLongArrowRight}
                    className="ml-3 arrow-icon transition-transform duration-300 ease-in-out scale-[1.1]"
                  />
                </button>
              </div>
              <div className="flex justify-center">
                <div className="max-w-[400px] mx-auto flex items-end">
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
                <div className="flex justify-center items-end mb-6 max-w-[400px] mx-auto mt-2">
                  <img src="legal-network.png" alt="Description of image" />
                </div>
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2   pb-16">
                  <p className="text-2xl font-semibold mb-3">Legal Expert:</p>
                  <p className="text-lg">
                    With over <span className="font-bold">10 decades of experience</span> in the legal industry, our
                    lead consultant specialises in navigating the challenges of
                    workplace legalities. We offer tailored solutions in areas
                    such as settlement agreement reviews, dispute resolution,
                    employment contracts, and HR support. Our goal is to
                    safeguard your rights and provide peace of mind, whether
                    you're an employer managing your workforce or an employee
                    facing workplace issues.
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="container pt-[60px] 2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="grid lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  grid-cols-1">
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2   pb-16">
                  <p className="text-lg">
                    Our Mission We are committed to delivering practical, actionable advice that aligns with your specific needs. By understanding the intricacies of employment law, we aim to create compliant, fair, and productive workplaces.
                  </p>
                </div>
                <div className="flex justify-center items-end mb-6 max-w-[400px] mx-auto mt-2">
                  <img src="gavel.jpg" className="rounded-lg" alt="Description of image" />
                </div>
              </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="container pt-[60px] 2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="grid lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  grid-cols-1">
                <div className="flex justify-center items-end mb-6 max-w-[400px] mx-auto mt-2">
                  <img src="approach.png" className="rounded-lg" alt="Description of image" />
                </div>
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2   pb-16">
                  <p className="text-lg">
                    Our Approach We pride ourselves on a client-centric approach, focusing on clear communication, timely responses, and a deep understanding of your unique situation. Our consultancy blends legal acumen with practical business sense, ensuring that our solutions are not just legally sound but also strategically beneficial.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* list of values */}
        <div className="flex justify-center">
          <div className="container  2xl:max-w-[1100px] xl:max-w-[1100px]">
            <div className="p-12">
              <div className="">
                <div className="">
                  <p className="font-bold text-center mb-10">Our Values:</p>
                  <ul>
                    <li class="card"  style={{color:"#ececec",backgroundColor:"#e98b43"}}>
                      <div class="icon"><img  className="rounded-lg w-[100px]" src="integrity.jpg" alt="Integrity" /></div>
                      <div>
                        <div class="social-title max-w-[700px]">Integrity</div>
                        <div class="content">We uphold the highest ethical standards in all our interactions.</div>
                      </div>
                    </li>
                    <li class="card" style={{color:"#ececec",backgroundColor:"#C23D2A"}}>
                      <div class="icon"><img className="rounded-lg w-[100px]" src="excellence.jpg" alt="Excellence" /></div>
                      <div>
                        <div class="social-title">Excellence</div>
                        <div class="content">We strive for exceptional quality in our services and advice.</div>
                      </div>
                    </li>
                    <li class="card" style={{color:"#ececec",backgroundColor:"#842C2A"}}>
                      <div class="icon"><img className="rounded-lg w-[100px]" src="innovation.jpg" alt="Innovation" /></div>
                      <div>
                        <div class="social-title">Innovation</div>
                        <div class="content">We leverage the latest legal developments and technology to provide cutting-edge solutions.</div>
                      </div>
                    </li>
                    <li class="card" style={{color:"#ececec",backgroundColor:"#022F46"}}>
                      <div class="icon"><img className="rounded-lg w-[100px]" src="empathy.jpg" alt="Empathy" /></div>
                      <div>
                        <div class="social-title">Empathy</div>
                        <div class="content"> We listen actively and respond with care andunderstanding.</div>
                      </div>
                    </li>
                    
                  </ul>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="container pt-[60px] 2xl:max-w-[1100px] xl:max-w-[1100px]">
              <div className="grid lg:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  grid-cols-1">
                <div className="flex justify-center items-end mb-6 max-w-[400px] mx-auto mt-2">
                  <img src="team1-white.jpg"  className="rounded w-[400px] h-[400px]" alt="Description of image" />
                </div>
                <div className="px-[40px] lg:col-span-2 2xl:col-span-2 xl:col-span-2 pb-16">
                  <p className="text-2xl font-semibold">Meet Our Consultant</p>
                  <p className="text-lg max-w-[600px]">
                    Masumah Akbar is a seasoned legal expert committed to equity and justice. With extensive experience representing both respondents and claimants in Employment Tribunal cases, Masumah has developed a specialization in workplace discrimination
                  </p>
                </div>
              </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="container pt-[30px] 2xl:max-w-[1100px] xl:max-w-[1100px]">
            <div className="p-12">
              <p className="text-center text-2xl font-bold mb-4">Why Choose Us?</p>
              <p className="text-lg text-center">
                At Hurr Consulting, we believe in building lasting relationships
                through trust, expertise, and a proactive approach to legal
                challenges. Whether you're seeking to resolve a workplace dispute,
                ensure compliance, or strengthen your employment practices, we're
                here to help you every step of the way. Explore our services or
                contact us today to learn how we can assist you in navigating the
                complexities of employment law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
