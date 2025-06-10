import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {};
  return (
    <>
      <div className="py-4 border border-slate-200 shadow px-16">
        <div className="flex justify-between items-center">
          <img
            src={assets.logo}
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer"
            alt=""
          />
          <button
            onClick={handleLogout}
            className="bg-blue-600 py-2 text-white cursor-pointer px-8 rounded-full"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Layout;
