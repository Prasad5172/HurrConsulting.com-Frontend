import React from "react";

function Fotter() {
  return (
    <>
      <div className="flex justify-center bg-gray-500 py-[50px]">
        <div className="container 2xl:max-w-[1200px] xl:max-w-[1200px] px-5">
          <div className="pb-8 flex items-center flex-wrap 2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b-2  border-[#ffffff4d] ">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/3 w-full flex items-center 2xl:justify-start xl:justify-start lg:justify-start justify-center 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 mb-8 ">
              <img src="image.jpg" alt="company logo" />
            </div>
            <div className="flex items-center 2xl:justify-end xl:justify-end lg:justify-end justify-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 w-full 2xl:border-b-0 xl:border-b-0 lg:border-b-0 md:border-b-0 border-b-2 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 pb-8">
              <div className="text-[20px]">
                Ready to take legal action?
                <p className="ml-4 2xl:inline  xl:inline lg:inline md:inline block 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 mt-5 border-white border-2 rounded-md p-4 hover:underline">
                  Call (123)12321321
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mb-12">
            <div className="2xl:w-2/5 xl:w-2/5 lg:2/5 md:w-2/5 mt-5 ">
              <ul>
                <li className="2xl:text-start xl:text-start lg:text-start md:text-start text-center">
                  <a className="hover:underline" href="/service">
                    Service
                  </a>
                </li>
                <li className="2xl:text-start xl:text-start lg:text-start md:text-start text-center">
                  <a className="hover:underline" href="/about">
                    About
                  </a>
                </li>
                <li className="2xl:text-start xl:text-start lg:text-start md:text-start text-center">
                  <a className="hover:underline" href="/resource">
                    Resource
                  </a>
                </li>
                <li className="2xl:text-start xl:text-start lg:text-start md:text-start text-center">
                  <a className="hover:underline" href="/contact">
                    ContactUss
                  </a>
                </li>
              </ul>
            </div>
            <div className="2xl:w-3/5 xl:w-3/5 lg:3/5 md:w-3/5 2xl:order-last xl:order-last lg:order-last md:order-last order-first mt-5  ">
              <p className="text-[16px] mb-2 font-bold ">What Drives Us</p>
              <p className="leading-relaxed">
                lawfirmsitedomainnamehere is committed to providing accurate and
                actionable content to individuals injured through no fault of
                their own. We understand the challenges people face in
                navigating the legal system, and our mission is to provide
                comprehensive support.
              </p>
            </div>
          </div>
          <div className=" text-sm">
            <p className="text-center text-[12px]">
              ® 2024 HurrConsulting.com - The information provided by HurrConsulting.com is
              not a substitute for legal or professional medical advice. If you
              request any information you may receive a phone call or email from
              our one of our Case Managers. Our Case Managers can be reached at
              (888) 726-9160 and website management at (855) 346-6101. For more
              information please see our privacy policy, terms of use, cookie
              policy, and disclaimer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fotter;
