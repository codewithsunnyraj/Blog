import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-between py-4 xs:px-10 px-6 items-center">
          <div>
            <img
              className="cursor-pointer sm:w-full xs:w-36 w-28"
              onClick={() => navigate("/")}
              src={assets.logo}
              alt=""
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/admin")}
              className="bg-blue-600 flex cursor-pointer px-8 xs:px-6 items-center gap-2 text-white py-2 rounded-full sm:px-10"
            >
              {token ? "Dashboard" : "Login"}
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
