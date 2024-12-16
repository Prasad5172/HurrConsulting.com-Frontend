import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";
export default function SimpleSlider({ slidesToShow, at1250 }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: at1250,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container mb-20">
      <Slider {...settings}>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div className="testimonial">
                  <blockquote>
                    “Our advocate during the final appeal meeting was thorough,
                    experienced, on top of her game, and very professional. She
                    was a star!“
                  </blockquote>
                  <div></div>
                  <p className="text-black">
                    - Anah M. &mdash; Worcestershire, UK
                  </p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div className="testimonial">
                  <blockquote>
                    “The settlement agreement review was incredibly detailed and
                    thorough. They helped me understand my rights clearly and
                    negotiated better terms than I expected. Highly
                    recommended!”
                  </blockquote>
                  <div></div>
                  <p className="text-black">
                    - Rajiv L. &mdash; Worcestershire, UK
                  </p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div className="testimonial">
                  <blockquote>
                    “From start to finish, the legal advice I received about my
                    discrimination case was excellent. They listened carefully,
                    explained my options clearly, and fought tirelessly on my
                    behalf. I felt supported every step of the way.”
                  </blockquote>
                  <div></div>
                  <p className="text-black">- Mei T.</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div className="testimonial">
                  <blockquote>
                    “The COT3 agreement review service was fantastic. They
                    spotted issues I would have missed and ensured the terms
                    were fair and enforceable. I’m very grateful for their
                    expertise.”
                  </blockquote>
                  <div></div>
                  <p className="text-black">- James K.</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div className="testimonial">
                  <blockquote>
                    “A first-class service! Their expertise in employment law
                    helped me achieve a positive resolution in my workplace
                    dispute. I felt reassured and confident throughout the
                    process.”
                  </blockquote>
                  <div></div>
                  <p className="text-black">- Amara C.</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
