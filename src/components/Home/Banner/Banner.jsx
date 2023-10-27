import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide>
          <img
            className=""
            src={
              "https://i.ibb.co/NTXbxKx/brand-new-shiny-black-retro-chopper-is-parked-brick-building.jpg"
            }
            alt=""
          />
          {/* <div className="slider-div">
            <div className="slider-img"></div>
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co/kS7G2sq/photo-custom-made-retro-motorcycle-against-skyscraper.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co/kS7G2sq/photo-custom-made-retro-motorcycle-against-skyscraper.jpg"
            }
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://i.ibb.co/qBg5fr3/motorcycle-with-helmet.jpg"}
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
