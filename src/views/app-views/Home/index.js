import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Aos from "aos";
import { Image } from "antd";
import Test from "./test";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
const Home = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  const contentStyle = {
    height: "65vh",
    color: "#fff",
    lineHeight: "65vh",
    textAlign: "center",
    background: "#364d79",
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "absolute",
          right: 40,
          zIndex: 20,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "absolute",
          left: 40,
          zIndex: 20,
        }}
        onClick={onClick}
      />
    );
  }
  document
    .querySelectorAll("img")
    .forEach((img) => img.addEventListener("load", () => Aos.refresh()));
  return (
    <div>
      <div className="">
        <Slider
          {...settings}
          className="relative"
          afterChange={() => Aos.refresh()}
        >
          <div className="relative bg-blue-500 w-full h-full flex justify-center items-center">
            <span
              data-aos="fade-right"
              data-aos-duration="1000"
              className="absolute  top-44 font-semibold p-0   bg-gray-200 bg-opacity-60"
              style={{ left: "22rem", fontSize: 82, color: "#3a2b6b" }}
            >
              Relaxing Environment
            </span>

            <img
              className="w-full object-cover"
              src="https://i2.wp.com/www.dentspa.com.tr/wp-content/uploads/2019/06/ZGG_9737.jpg?fit=2236%2C1490&ssl=1"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              className="w-full  object-cover"
              src="https://i0.wp.com/www.dentspa.com.tr/wp-content/uploads/2019/02/slider-white.jpg?fit=1455%2C745&ssl=1"
              style={contentStyle}
            />
          </div>
          <div>
            <img
              className="w-full  object-cover"
              src="https://i2.wp.com/www.dentspa.com.tr/wp-content/uploads/2019/02/slide-1.jpg?fit=1455%2C745&ssl=1"
              style={contentStyle}
            />
          </div>
        </Slider>
      </div>

      <br />
      <Test />
    </div>
  );
};
export default Home;
