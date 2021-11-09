import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import Slider from "react-slick";
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

const Home = () => {
  //   document.addEventListener("scroll", (event) => {
  //     const top = document.body.getBoundingClientRect().top;
  //     const header = document.getElementById("header");

  //     if (header.classList.contains("bg-red-500") === true) {
  //       header.classList.remove("bg-red-500", "h-12");
  //     }

  //     if (header.classList.contains("bg-red-500") === false && top < -200) {
  //       header.classList.add("bg-red-500", "h-12");
  //       return;
  //     }
  //   });

  return (
    <div>
      <Slider {...settings} className="relative">
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
      <div className="  w-full h-72 px-8 flex gap-12">
        <div
          className="flex-1   h-full bg-red-500  relative  text-center  "
          style={{
            backgroundImage: `url("https://assets.pinecreekdental.com/wp-content/uploads/2016/10/getting-dental-implants.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="  bg-black w-full h-full absolute bg-opacity-40 "></div>
          <p
            className="uppercase  absolute  text-gray-100 text-2xl px-7 z-10"
            style={{ marginTop: "47%" }}
          >
            dental implant solutions
          </p>
        </div>
        <div
          className="flex-1   h-full bg-red-500  relative  text-center  "
          style={{
            backgroundImage: `url("https://assets.pinecreekdental.com/wp-content/uploads/2016/10/getting-dental-implants.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="  bg-black w-full h-full absolute bg-opacity-40 "></div>
          <p
            className="uppercase  absolute  text-gray-100 text-2xl px-7 z-10"
            style={{ marginTop: "47%" }}
          >
            dental implant solutions
          </p>
          <div
            className="absolute -bottom-16  rounded-md  py-2 px-4 opacity-95  w-10/12 h-32"
            style={{ left: 15, backgroundColor: "#9e9e9e" }}
          >
            <div className="">
              <span className="text-center text-2xl">
                {" "}
                Over 30 shade/ material combinations to choose from
              </span>
            </div>
          </div>
        </div>{" "}
        <div
          className="flex-1   h-full bg-red-500  relative  text-center  "
          style={{
            backgroundImage: `url("https://assets.pinecreekdental.com/wp-content/uploads/2016/10/getting-dental-implants.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="  bg-black w-full h-full absolute bg-opacity-40 "></div>
          <p
            className="uppercase  absolute  text-gray-100 text-2xl px-7 z-10"
            style={{ marginTop: "47%" }}
          >
            dental implant solutions
          </p>
        </div>{" "}
        <div
          className="flex-1   h-full bg-red-500  relative  text-center  "
          style={{
            backgroundImage: `url("https://assets.pinecreekdental.com/wp-content/uploads/2016/10/getting-dental-implants.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="  bg-black w-full h-full absolute bg-opacity-40 "></div>
          <p
            className="uppercase  absolute  text-gray-100 text-2xl px-7 z-10"
            style={{ marginTop: "47%" }}
          >
            dental implant solutions
          </p>
        </div>{" "}
        <div
          className="flex-1   h-full bg-red-500  relative  text-center  "
          style={{
            backgroundImage: `url("https://assets.pinecreekdental.com/wp-content/uploads/2016/10/getting-dental-implants.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="  bg-black w-full h-full absolute bg-opacity-40 "></div>
          <p
            className="uppercase  absolute  text-gray-100 text-2xl px-7 z-10"
            style={{ marginTop: "47%" }}
          >
            dental implant solutions
          </p>
        </div>
      </div>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>

      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
      <p>www</p>
    </div>
  );
};

export default Home;
