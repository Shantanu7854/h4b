import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className=" bg-gray-900 text-white ">
      <div className="text-container py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1>Kredi</h1>
        <p className="sub-title mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">
          One Stop Solution for your college needs
        </p>
      </div>
    </section>
  );
};

export default Home;
