import React, { useEffect } from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="mt-[80px] dark:bg-[#292929] about">
        <div>
          <header id="page-header" class="page-header overlay"></header>

          <div className="flex justify-center">
            <div className="container 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px]">
              <div className="2xl:p-4 xl:p-4 lg:p-4 md:p-4 p-6 mb-4">
                <p className="text-[40px] text-gray-400 font-extralight">
                  About Us
                </p>
                <p className="mt-4 text-md dark:text-[#e0e0e0]">
                  At Hurr Consulting we are passionate about providing expert
                  legal consultancy services focused on employment law, with a
                  particular emphasis on workplace discrimination cases. Our
                  principal consultant. <b>Masumah Akbar</b>, has over <b>10</b>{" "}
                  years of experience advocating for both claimants and
                  respondents, offering a well-rounded perspective that
                  strengthens our ability to achieve fair outcomes.
                </p>
                <p className="mt-4 text-md dark:text-[#e0e0e0]">
                  With a deep understanding of employment law and a personal
                  commitment to justice, we offer tailored legal advice designed
                  to empower clients and help them navigate complex legal issues
                  with confidence. Our experience spans a wide range of
                  employment disputes, from discrimination and harassment claims
                  to unfair dismissal and contract negotiations.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg ">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px]  dark:bg-[#3c3c3c]  pt-5">
                <div className="p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 text-center dark:text-white">
                    Why Choose Us?
                  </p>
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-semibold mb-3 dark:text-white">
                    Considerations:
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Proven Expertise:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        : With over a decade of experience representing both
                        claimantsand respondents, we bring a deep understanding
                        of employment law from everyangle.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Personalized Support:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                         We take the time to understand your
                        uniquecircumstances, offering clear, actionable advice
                        and custom legal strategiestailored to your goals.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Justice-Driven Advocacy:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        We are passionate about promoting equality, fairness,and
                        respect in the workplace, striving for the best possible
                        outcomes in everycase.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Transparent Guidance:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        Expect open communication, honest assessments,
                        andstraightforward pricing with no hidden fees—your
                        trust matters to us.
                      </span>
                       
                    </li>
                  </ul>
                  <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    Whether you are facing discrimination at work, need help
                    negotiating a settlement, orrequire legal advice on your
                    employment rights, Hurr Consulting is here to advocate
                    foryou with expertise and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col  mb-5 rounded-lg pt-10">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c] pt-5">
                <div className="p-4 ">
                  <p className="text-center 2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 dark:text-white">
                    Settlement Agreement and COT3 Checking
                  </p>

                  <p className=" 2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    At Hurr Consulting we understand the importance of having a
                    clear, fair, and legally sound settlement agreement or COT3
                    in place. Our expert legal consultants provide a
                    comprehensive review and guidance service to ensure you
                    fully understand the terms, implications, and potential
                    outcomes before you sign.
                  </p>
                </div>

                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 dark:text-white">
                    What We Offer
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <p>
                        <span className="font-bold text-[19px] dark:text-white">
                          Settlement Agreement Review:{" "}
                        </span>{" "}
                        <span className="text-[17px] dark:text-[#e0e0e0]">
                          : We meticulously review your settlement agreement to
                          ensure that all terms are fair and protect your
                          rights. This includes:
                        </span>
                         
                      </p>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Analyzing the key clauses, including
                            confidentiality, non-compete, and release of claims.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Ensuring financial terms, such as compensation, are
                            accurate and in line with legal requirements.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Identifying any potential risks or issues with the
                            agreement.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3 dark:text-white">
                      <p>
                        <span className="font-bold text-[19px] dark:text-white">
                          COT3 Agreement Review:{" "}
                        </span>{" "}
                        <span className="text-[17px] dark:text-[#e0e0e0]">
                          For COT3 agreements, which are used to resolve
                          workplace disputes through ACAS, we provide a detailed
                          analysis to help you understand your obligations and
                          entitlements. We ensure:
                        </span>
                         
                      </p>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            The terms of settlement are clear and enforceable
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            The agreement reflects the outcomes agreed during
                            ACAS negotiations.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            There are no hidden or ambiguous clauses that could
                            impact you negatively in the future.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3 dark:text-white">
                      <p>
                        <span className="font-bold text-[19px] dark:text-white">
                          Expert Guidance and Support:{" "}
                        </span>{" "}
                        <span className="text-[17px] dark:text-[#e0e0e0]">
                          After reviewing your agreement, we’ll schedule a 30-
                          minute consultation call to:
                        </span>
                         
                      </p>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Discuss our findings and explain the legal language
                            in plain terms.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Address any concerns or questions you may have.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Provide tailored advice on negotiating amendments or
                            clarifications if needed.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* bold content */}
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="text-center 2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 dark:text-white">
                    Transparent and Affordable Pricing
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-semibold text-[19px]  dark:text-white">
                        Standard Review (Employer Contribution):
                      </span>{" "}
                      <span className="font-black text-[17px]  dark:text-[#e0e0e0]">
                        £500 + VAT (typically covered by your employer).
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Advanced Review:
                      </span>{" "}
                      text-[#535353]
                      <span className="font-bold text-[17px]  dark:text-[#e0e0e0]">
                         £750 + VAT for more complex agreements involving
                        additional documents or terms.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Negotiation Support:
                      </span>{" "}
                      <span className="font-bold text-[17px]  dark:text-[#e0e0e0]">
                        Add £250 for extended discussions or requested
                        amendments.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Fast-Track Service:
                      </span>{" "}
                      <span className="font-bold text-[17px]  dark:text-[#e0e0e0]">
                        Need it urgently? Upgrade to same-day review for just
                        £100 extra.
                      </span>
                       
                    </li>
                  </ul>
                  <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    We ensure that you receive exceptional value and peace of
                    mind without unexpected costs. Most clients find their
                    review is fully covered by their employer’s contribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg ">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 text-center dark:text-white">
                    Why Choose Us?
                  </p>

                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Expert Legal Knowledge:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        Our team specializes in employment law and has extensive
                        experience with settlement agreements and COT3s.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Transparent and Affordable:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        We offer competitive pricing with no hidden costs.
                        You’ll know exactly what you’re paying for.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Quick Turnaround:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        We understand time is of the essence, so we aim to
                        review your agreement and schedule your consultation
                        promptly.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Nature of Dispute:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        Complex disputes might benefit from the detailed
                        negotiation allowed in settlement agreements.
                      </span>
                       
                    </li>
                  </ul>
                  <div className="pt-6">
                    <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 dark:text-white">
                      How It Works
                    </p>
                    <ul className="list-disc ml-4">
                      <li className="mb-3 dark:text-white">
                        <p>
                          <span className="font-bold text-[19px] dark:text-white">
                            Submit Your Agreement:{" "}
                          </span>{" "}
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            :Send us your settlement agreement or COT3 via our
                            secure platform.
                          </span>
                           
                        </p>
                      </li>
                      <li className="mb-3 dark:text-white">
                        <p>
                          <span className="font-bold text-[19px] dark:text-white">
                            Legal Review:{" "}
                          </span>{" "}
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            {" "}
                            Our legal consultants will carefully analyse your
                            agreement and prepare a summary of key findings.
                          </span>
                           
                        </p>
                      </li>
                      <li className="mb-3 dark:text-white">
                        <p>
                          <span className="font-bold text-[19px] dark:text-white">
                            Consultation Call:{" "}
                          </span>{" "}
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Join us for a 30-minute call to discuss the
                            agreement and receive actionable advice.
                          </span>
                           
                        </p>
                      </li>
                    </ul>
                  </div>
                  <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    Don’t leave your employment settlement to chance. Contact us
                    today to ensure your agreement works for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="p-4">
                  <p className="text-center 2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 2xl:leading-normal xl:leading-normal lg:leading-normal md:leading-tight leading-normal dark:text-white">
                    Case Assessment
                  </p>
                  <p className=" 2xl:px-5 xl:px-5 lg:px-5 md:px-5 leading-normal 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[18px] dark:text-[#e0e0e0]">
                    Facing a potential legal case can feel overwhelming without
                    a clear understanding of your position. Our{" "}
                    <b>Case Assessment Service provides</b> you with the clarity
                    and confidence needed to make informed decisions.
                  </p>
                </div>
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-semibold mb-3 dark:text-white">
                    What We Offer:
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Comprehensive Case Evaluation:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        We provide a thorough review of your situation,
                        assessing the merits and challenges of your case. This
                        includes:
                      </span>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Reviewing any relevant documents or evidence you
                            provide.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Identifying potential legal claims and defenses.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Evaluating the likelihood of success based on the
                            details of your case.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        One-Hour Consultation Call:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        We’ll schedule a one-hour consultation call to:
                      </span>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Discuss the details of your case and clarify any
                            uncertainties.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Explain the legal framework and how it applies to
                            your situation.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Provide tailored advice on next steps, including
                            negotiation strategies or further legal actions.
                          </span>
                           
                        </li>
                      </ul>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Detailed Case Breakdown:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        Following the consultation, you’ll receive a written
                        document summarizing:
                      </span>
                       {" "}
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            The key points discussed during the call.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            An assessment of your case’s strengths and
                            weaknesses.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Recommendations for moving forward.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4">
                  <p className="text-center 2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 dark:text-white">
                    Transparent and Affordable Pricing
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-semibold text-[19px]  dark:text-white">
                        Case Assessment Package:
                      </span>{" "}
                      <span className="font-black text-[17px]  dark:text-[#e0e0e0]">
                        £600 + VAT, which includes document review, the one-hour
                        consultation call, and a written breakdown of your case.
                      </span>
                       
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Fast-Track Service:
                      </span>{" "}
                      <span className="font-bold text-[17px]  dark:text-[#e0e0e0]">
                        Need urgent guidance? Upgrade to a 48-hour turnaround
                        for just £100 extra.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c] pt-5">
                  <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                    <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 dark:text-white">
                      Clear Document Guidelines
                    </p>

                    <ul className="list-disc ml-4">
                      <li className="mb-3 dark:text-white">
                        <p>
                          <span className=" text-[19px] dark:text-white">
                            The Case Assessment Package includes the review of
                            up to <b>five key documents</b>. This ensures we can
                            deliver an efficient and focused service. Examples
                            of key documents include:
                          </span>
                          <ul className="list-decimal ml-5 mt-2">
                            <li className="mb-3 dark:text-white">
                              <span className="text-[17px] dark:text-[#e0e0e0]">
                                Employment contracts.
                              </span>
                               
                            </li>
                            <li className="mb-3 dark:text-white">
                              <span className="text-[17px] dark:text-[#e0e0e0]">
                                Grievance letters.
                              </span>
                               
                            </li>
                            <li className="mb-3 dark:text-white">
                              <span className="text-[17px] dark:text-[#e0e0e0]">
                                Grievance outcomes.
                              </span>
                               
                            </li>
                            <li className="mb-3 dark:text-white">
                              <span className="text-[17px] dark:text-[#e0e0e0]">
                                Key correspondence (e.g., emails or letters).
                              </span>
                               
                            </li>
                            <li className="mb-3 dark:text-white">
                              <span className="text-[17px] dark:text-[#e0e0e0]">
                                Any relevant supporting evidence.
                              </span>
                               
                            </li>
                          </ul>
                           
                        </p>
                      </li>
                    </ul>
                    <p className="leading-normal text-[18px] dark:text-[#e0e0e0]">
                      If additional documents need to be reviewed, we charge{" "}
                      <b>£50 per extra document</b> depending on the complexity.
                      This allows us to provide a thorough assessment without
                      unexpected costs.
                    </p>
                  </div>
                  {/* bold content */}
                  <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                    <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 text-center dark:text-white">
                      Why Choose Us?
                    </p>

                    <ul className="list-disc ml-4">
                      <li className="mb-3 dark:text-white">
                        <span className="font-bold text-[19px] dark:text-white">
                          Personalized Advice:
                        </span>{" "}
                        <span className="text-[17px] dark:text-[#e0e0e0]">
                          Every case is unique. Our team takes the time to
                          understand your specific situation and tailor our
                          advice accordingly
                        </span>
                         
                      </li>
                      <li className="mb-3 dark:text-white">
                        <span className="font-bold text-[19px] dark:text-white">
                          Clear, Actionable Insights:
                        </span>{" "}
                        <span className="text-[17px] dark:text-[#e0e0e0]">
                          We simplify complex legal concepts so you can make
                          confident decisions.
                        </span>
                         
                      </li>
                      <li className="mb-3 dark:text-white">
                        <span className="font-bold text-[19px] dark:text-white">
                          Expertise You Can Trust:
                        </span>{" "}
                        <span className="text-[17px] dark:text-[#e0e0e0]">
                          With extensive experience in employment law, we
                          provide high-quality, reliable guidance
                        </span>
                         
                      </li>
                    </ul>
                    <div className="pt-6">
                      <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-bold mb-3 dark:text-white">
                        How It Works
                      </p>
                      <ul className="list-disc ml-4">
                        <li className="mb-3 dark:text-white">
                          <p>
                            <span className="font-bold text-[19px] dark:text-white">
                              Submit Your Details:
                            </span>
                            <span className="text-[17px] dark:text-[#e0e0e0]">
                              Provide us with key documents and an overview of
                              your situation via our secure platform.
                            </span>
                             
                          </p>
                        </li>
                        <li className="mb-3 dark:text-white">
                          <p>
                            <span className="font-bold text-[19px] dark:text-white">
                              Consultation Call:
                            </span>
                            <span className="text-[17px] dark:text-[#e0e0e0]">
                              Join us for a one-hour call to discuss your case
                              and receive immediate feedback.
                            </span>
                             
                          </p>
                        </li>
                        <li className="mb-3 dark:text-white">
                          <p>
                            <span className="font-bold text-[19px] dark:text-white">
                              Receive Your Breakdown:
                            </span>
                            <span className="text-[17px] dark:text-[#e0e0e0]">
                              Within five business days, you’ll receive a
                              comprehensive document outlining the merits of
                              your case and next steps.
                            </span>
                             
                          </p>
                        </li>
                      </ul>
                    </div>
                    <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                      Take control of your legal journey with clarity and
                      confidence. Contact us today to schedule your Case
                      Assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 2xl:leading-normal xl:leading-normal lg:leading-normal md:leading-tight leading-normal dark:text-white">
                    Disclaimer: Non-Reserved Legal Services
                  </p>
                  <p className="leading-normal 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[18px] dark:text-[#e0e0e0]">
                    The services provided by Hurr Consulting are classified as
                    non-reserved legal services under the Legal Services Act
                    2007. This means that we are not authorized to carry out
                    reserved legal activities, which are restricted to regulated
                    legal professionals such as solicitors, barristers, and
                    licensed conveyancers.
                  </p>
                </div>
                <div className="2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-semibold mb-3 dark:text-white">
                    What We Do:
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        We provide legal consultancy services focused on:
                      </span>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Employment law advice and guidance.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Reviewing and advising on employment-related
                            documents, including settlement agreements, COT3
                            agreements, and case assessments.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Drafting summaries, recommendations, and legal
                            guidance related to employment disputes
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        One-Hour Consultation Call:
                      </span>{" "}
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        We’ll schedule a one-hour consultation call to:
                      </span>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Discuss the details of your case and clarify any
                            uncertainties.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Explain the legal framework and how it applies to
                            your situation.
                          </span>
                           
                        </li>
                        <li className=" dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Provide tailored advice on next steps, including
                            negotiation strategies or further legal actions.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        Detailed Case Breakdown:
                      </span>
                      <span className="text-[17px] dark:text-[#e0e0e0]">
                        Following the consultation, you’ll receive a written
                        document summarizing:
                      </span>
                       {" "}
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            The key points discussed during the call.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            An assessment of your case’s strengths and
                            weaknesses.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Recommendations for moving forward.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="2xl:px-8 xl:px-8 lg:px-8 md:px-8 px-4">
                  <p className="2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] text-[24px] font-semibold mb-3 dark:text-white">
                    What We Do Not Do:
                  </p>
                  <ul className="list-disc ml-4">
                    <li className="mb-3 dark:text-white">
                      <span className="font-bold text-[19px] dark:text-white">
                        We do not perform reserved legal activities, including
                        but not limited to:
                      </span>
                      <ul className="list-decimal ml-5 mt-2">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Representing clients in court, tribunals, or other
                            legal proceedings.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Conducting litigation on behalf of clients.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Preparing instruments relating to the transfer of
                            property or other legally reserved tasks.
                          </span>
                           
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="text-center 2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 dark:text-white">
                    Important Notice
                  </p>
                  <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    While we strive to provide accurate, reliable, and
                    high-quality legal guidance, Hurr Consulting is not a law
                    firm and is not regulated by the Solicitors Regulation
                    Authority (SRA) or any similar legal regulatory body.
                    Engaging our services does not create a solicitor-client
                    relationship.
                  </p>
                  <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    If your legal matter requires representation in court,
                    conducting litigation, or other reserved legal services, we
                    recommend consulting a regulated legal professional or law
                    firm.
                  </p>
                  <p className="py-3 px-1 leading-normal text-[18px] dark:text-[#e0e0e0]">
                    For any questions or clarifications about our services,
                    please contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col mb-5 rounded-lg">
              <div className="2xl:m-5 xl:m-5 lg:m-5 md:m-5 sm:m-5 m-4 rounded-[16px] bg-[#f3f3fd] dark:bg-[#3c3c3c]  pt-5">
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="2xl:text-[42px] xl:text-[42px] lg:text-[42px] md:text-[35px] sm:text-[35px] text-[29px] font-bold font-serif mb-4 2xl:leading-normal xl:leading-normal lg:leading-normal md:leading-tight leading-normal dark:text-white">
                    Terms of Service
                  </p>
                  <p className="leading-normal 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] text-[18px] dark:text-[#e0e0e0]">
                    By purchasing services from Hurr Consulting, you agree to
                    the following terms:
                  </p>
                </div>
                <div className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4">
                  <p className="mb-4 dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      1.Services Provided
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                      We provide non-reserved legal services, including document
                      reviews, legal consultations, and case assessments. We do
                      not provide reserved legal services as defined by the
                      Legal Services Act 2007.
                    </p>
                  </p>
                  <p className="mb-4 dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      2. Purchase and Payment
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                      <ul className="list-disc ml-4">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Full payment is required upon purchasing a service.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            All prices are listed in GBP and are subject to
                            applicable taxes.
                          </span>
                           
                        </li>
                      </ul>
                    </p>
                  </p>
                  <p className="mb-4 dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      3. Client Responsibilities
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                      <ul className="list-disc ml-4">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            You must provide complete and accurate information.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            You are responsible for ensuring timely submission
                            of documents for review.
                          </span>
                           
                        </li>
                      </ul>
                    </p>
                  </p>
                  <p className="mb-4 dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      4. Refund Policy
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                      <ul className="list-disc ml-4">
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Refunds are only issued if services have not yet
                            commenced.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                            Once work has started, fees are non-refundable.
                          </span>
                           
                        </li>
                      </ul>
                    </p>
                  </p>
                  <p className="mb-4 dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      5. Limitation of Liability
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                    To the maximum extent permitted by applicable law:
                    </p>
                    <p className="px-4 mt-2  text-md dark:text-[#e0e0e0]">
                      <ul className="list-disc ml-4">
                        <li className="mb-3 dark:text-white">
                          
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                          We are not responsible for any indirect, incidental, special, or consequential
damages, including loss of revenue, profits, business, data, or anticipated savings
arising from the use of our services.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                          Our total liability, whether in contract, tort (including negligence), or otherwise, is
                          strictly limited to the total amount paid by the client for the relevant service.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                          We are not liable for outcomes based on incomplete, incorrect, or delayed
                          information provided by the client.
                          </span>
                           
                        </li>
                        <li className="mb-3 dark:text-white">
                          
                          <span className="text-[17px] dark:text-[#e0e0e0]">
                          Nothing in this section limits liability for death, personal injury caused by
negligence, fraud, or other liabilities that cannot be legally excluded.
                          </span>
                           
                        </li>
                      </ul>
                    </p>
                  </p>
                  <p className="mb-4 dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      6. Data Protection
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                      We will handle your personal data in compliance with
                      applicable data protection laws, as described in our
                      Privacy Policy.
                    </p>
                  </p>
                  <p className=" dark:text-white">
                    <span className="font-bold text-[19px] dark:text-white">
                      7. Governing Law and Jurisdiction
                    </span>
                    <p className="px-4 mt-2 text-md dark:text-[#e0e0e0]">
                      These terms are governed by the laws of England, Wales,
                      and Scotland. Any disputes arising under these Terms of
                      Service will be subject to the exclusive jurisdiction of
                      the courts in these regions.
                    </p>
                  </p>
                </div>
                <p className="2xl:p-8 xl:p-8 lg:p-8 md:p-8 p-4 text-md dark:text-[#e0e0e0]">
                  By proceeding with your purchase, you confirm that you have
                  read, understood, and accepted these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

