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
import AboutUs from "../../AboutUs/AboutUs";

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
              "https://i.ibb.co/r2DsDTF/harley-davidson-HYj-J1-AZnqw-unsplash.jpg"
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
      <div className="flex justify-between my-10 gap-x-10 relative">
        <div className="cursor-pointer service-img service-img1 ">
          <div className="text-white ml-6 z-20 ">
            <p className="font-semibold text-2xl">Motorcycle</p>
            <h2 className="font-semibold text-3xl bg-[rgba(99,102,241,0.5)] text-h2 px-3 py-1 rounded-lg">
              Custom
            </h2>
          </div>
        </div>
        <div className="cursor-pointer service-img service-img2 ">
          {" "}
          <div className="text-white ml-6 z-20 ">
            <p className="font-semibold text-2xl">Motor Repair</p>
            <h2 className="font-semibold text-3xl bg-[rgba(99,102,241,0.5)] text-h2 px-3 py-1 rounded-lg">
              Services
            </h2>
          </div>
        </div>
        <div className="cursor-pointer service-img service-img3 ">
          {" "}
          <div className="text-white ml-6 z-20 ">
            <p className="font-semibold text-2xl">Online</p>
            <h2 className="font-semibold text-3xl bg-[rgba(99,102,241,0.5)] text-h2 px-3 pr-6 py-1 rounded-lg">
              Store
            </h2>
          </div>
        </div>
      </div>
      <AboutUs></AboutUs>
    </>
  );
};

export default Banner;
