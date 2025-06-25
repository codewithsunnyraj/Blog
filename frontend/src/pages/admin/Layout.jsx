import React from "react";
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../component/admin/Sidebar";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();
  const handleLogout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };
  return (
    <>
      <div className="py-4 border border-slate-200 shadow ">
        <div className="px-16">
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
        <div className="flex h-[calc(100vh-70px)] py-14">
          <div>
            <Sidebar />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
