import Loading from "components/Shared-Components/Loading";
import React from "react";

const Home = () => {
  document.addEventListener("scroll", (event) => {
    const top = document.body.getBoundingClientRect().top;
    const header = document.getElementById("header");

    if (header.classList.contains("bg-red-500") === true) {
      header.classList.remove("bg-red-500", "h-12");
    }

    if (header.classList.contains("bg-red-500") === false && top < -200) {
      header.classList.add("bg-red-500 ", "h-12");
      return;
    }
  });
  return (
    <div className="min-w-screen h-full bg-blue-400">
      <div
        id="header"
        className="bg-black top-0 w-screen h-52 sticky transition duration-1000"
      ></div>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
      <p>aawww</p>
    </div>
  );
};

export default Home;
