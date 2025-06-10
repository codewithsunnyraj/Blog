import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="w-full py-6 md:py-20 px-8 md:px-20 relative">
      <div className="flex flex-col justify-center items-center">
        <div className="inline-flex bg-blue-100 items-center py-2 px-4 gap-3 justify-center rounded-full border border-gray-500 shadow">
          <p>New:AI Features integrated </p>
          <img src={assets.star_icon} alt="" />
        </div>
        <div>
          <h2 className="text-4xl lg:text-6xl text-center my-6 font-semibold">
            Your Own <span className="text-blue-600">Blogging</span>
            <br />
            Platform
          </h2>
          <p className="text-center max-w-2xl text-gray-500">
            This is your space to think out loud, to share what matters, and to
            write without filters. whether it's one word or a thousand, your
            story starts rights here
          </p>
          <form
            action=""
            className="border my-6 relative w-full rounded border-gray-400 max-w-2xl shadow px-2"
          >
            <input
              type="text"
              className="pl-4 outline-none py-4 w-[85%] "
              placeholder="Search Blog Here"
            />
            <button className="bg-blue-600 rounded text-white text-end py-2 ml-2 px-5">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <img
          src={assets.gradientBackground}
          className="absolute -z-30 -top-50"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
