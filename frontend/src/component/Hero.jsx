import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-6 md:py-20 container mx-auto md:px-20 relative">
      <div className="flex flex-col justify-center items-center">
        <div className="inline-flex bg-blue-100 items-center py-2 px-4 gap-3 mt-14 md:mt-0 justify-center rounded-full border border-gray-500 shadow">
          <p>New:AI Features integrated </p>
          <img src={assets.star_icon} alt="" />
        </div>
        <div>
          <h2 className=" text-3xl xs:text-4xl lg:text-6xl text-center my-6 font-semibold">
            Your Own <span className="text-blue-600">Blogging</span>
            <br />
            Platform
          </h2>
          <p className="text-center max-w-2xl px-3 xs:px-0 text-gray-500">
            This is your space to think out loud, to share what matters, and to
            write without filters. whether it's one word or a thousand, your
            story starts rights here
          </p>
          <form
            action=""
            className="border hidden md:flex mx-2 my-4 xs:my-6 relative w-full rounded border-gray-400 md:max-w-2xl shadow  pl-2"
          >
            <input
              type="text"
              className="pl-4 outline-none py-4 w-[75%]  md:w-[85%] "
              placeholder="Search Blog Here"
            />
            <button className="bg-blue-600 rounded xs:text-center w-[25%]  text-white text-end py-1 xs:py-2 ml-2 px-5">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <img
          src={assets.gradientBackground}
          className="absolute -z-30 top-0 md:-top-50"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
