import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";
export default function SimpleSlider({slidesToShow,at1250 }) {
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
                <div class="testimonial">
                  <blockquote>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus. Nulla vitae elit libero, a pharetra augue. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                  </blockquote>
                  <div></div>
                  <p className="text-black">John Doe &mdash; Worcestershire, UK</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div class="testimonial">
                  <blockquote>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus. Nulla vitae elit libero, a pharetra augue. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                  </blockquote>
                  <div></div>
                  <p className="text-black">John Doe &mdash; Worcestershire, UK</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div class="testimonial">
                  <blockquote>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus. Nulla vitae elit libero, a pharetra augue. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                  </blockquote>
                  <div></div>
                  <p className="text-black">John Doe &mdash; Worcestershire, UK</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div class="testimonial">
                  <blockquote>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus. Nulla vitae elit libero, a pharetra augue. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                  </blockquote>
                  <div></div>
                  <p className="text-black">John Doe &mdash; Worcestershire, UK</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div class="testimonial">
                  <blockquote>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus. Nulla vitae elit libero, a pharetra augue. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                  </blockquote>
                  <div></div>
                  <p className="text-black">John Doe &mdash; Worcestershire, UK</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        <div className="p-1">
          <div className=" rounded-sm">
            <h3 className=" text-center">
              <div id="content">
                <div class="testimonial">
                  <blockquote>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor. Nulla vitae elit libero, a
                    pharetra augue. Donec id elit non mi porta gravida at eget
                    metus. Nulla vitae elit libero, a pharetra augue. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                  </blockquote>
                  <div></div>
                  <p className="text-black">John Doe &mdash; Worcestershire, UK</p>
                </div>
              </div>
            </h3>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
