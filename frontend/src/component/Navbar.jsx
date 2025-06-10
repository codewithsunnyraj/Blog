import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-between py-4 px-10 items-center">
          <div>
            <img
              className="cursor-pointer "
              onClick={() => navigate("/")}
              src={assets.logo}
              alt=""
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/admin")}
              className="bg-blue-600 flex cursor-pointer items-center gap-2 text-white py-2 rounded-full px-10"
            >
              Login
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
