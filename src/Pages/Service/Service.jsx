import React from "react";
import "./Service.css";
import SimpleSlider from "./SimpleSlider";

function Service() {
  return (
    <>
      <div className="mt-[72px]">
        <div>
          <header
            id="page-header"
            class="page-header overlay"
            style={{
              background: "url('page-header-bg-services.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div class="container">
              <div class="section-header">
                <div class="row">
                  <div class=" 2xl:max-w-fit xl:max-w-fit lg:max-w-fit md:max-w-fit w-full ">
                    <p class="page-title 2xl:text-[65px] xl:text-[50px] lg:text-[40px] md:text-[40px] text-[35px]">
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
                <p className="text-[40px] text-gray-400 font-extralight">
                  Our Services
                </p>
                <p className="mt-4 text-md">
                  We work with a variety of business types and sizes, but a few
                  examples include: food and beverage companies like coffee
                  shops/restaurants/bars, retail (online or brick and mortar),
                  web designers, app developers, freelance
                  artists/photographers/writers, fitness/dance teachers and
                  studios, wellness practitioners, produce marketers and
                  wholesalers, marketing firms, tech startups, environmental
                  consultants, and medical device sales companies. We are
                  headquartered in Oakland, but we can help with any issue
                  concerning California Law and our client companies are based
                  around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="container 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[650px]">
              <SimpleSlider slidesToShow={3} at1250={2}/>
            </div>
          </div>
          <div className="flex justify-center slider-with-sidediv ">
            <div className="container flex justify-center 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[1200px] 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col bg-[#f3f3fd] mb-5 rounded-lg pt-10">
              <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full 2xl:order-1 xl:order-1 lg:order-1 md:order-1 order-2">
              <SimpleSlider slidesToShow={1} at1250={1}/>
              </div>
              <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full 2xl:order-2 xl:order-2 lg:order-2 md:order-2 order-1 p-4 -translate-y-1/2 flex flex-col justify-center ">
                <p className="text-xl font-semibold mb-2">Speak With a Case Manager</p>
                <p className="mb-4">Our Case Managers are available 24/7 to answer your questions and get you and your family the legal support you need.</p>
                <p className="text-violet-500">Call <a className="  hover:underline">(888) 726-9160</a>  right now to get connected.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
