import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ScreenShot = () => {
  const screenshot1 = require("../styles/images/screenshot-1.jpg");
  const screenshot2 = require("../styles/images/screenshot-2.jpg");
  const screenshot3 = require("../styles/images/screenshot-3.jpg");
  const screenshot4 = require("../styles/images/screenshot-4.jpg");
  const screenshot5 = require("../styles/images/screenshot-5.jpg");
  const screenshot6 = require("../styles/images/screenshot-6.jpg");
  const screenshot7 = require("../styles/images/screenshot-7.jpg");
  const screenshot8 = require("../styles/images/screenshot-8.jpg");
  const screenshot9 = require("../styles/images/screenshot-9.jpg");
  const screenshot10 = require("../styles/images/screenshot-10.jpg");

  return (
    <div id="screens" className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Image Slider */}
            <Swiper
              className="slider-container"
              // modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {/* <div className="swiper-container image-slider"> */}
              {/* <div className="swiper-wrapper"> */}
              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href="src/res/images/screenshot-1.jpg"
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot1}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot2}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot2}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot3}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot3}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot4}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot4}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot5}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot5}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot1}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot6}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href="images/screenshot-2.jpg"
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot7}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot3}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot8}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot4}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot9}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}

              {/* Slide */}
              <SwiperSlide className="swiper-slide">
                <a
                  href={screenshot5}
                  className="popup-link"
                  data-effect="fadeIn"
                >
                  <Image
                    className="img-fluid"
                    src={screenshot10}
                    alt="alternative"
                  />
                </a>
              </SwiperSlide>
              {/* end of slide */}
              {/* </div> */}

              {/* Add Arrows */}
              {/* <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div> */}
              {/* end of add arrows */}
              {/* </div> */}
            </Swiper>
            {/* end of image slider */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShot;
