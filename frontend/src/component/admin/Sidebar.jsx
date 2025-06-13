import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="border-r border-gray-400 min-h-screen">
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-6 py-3.5 px-16 cursor-pointer ${
            isActive && "bg-sky-300 border-r-4 border-red-500"
          }`
        }
      >
        <img src={assets.home_icon} className="w-5" alt="" />
        <p>Dashboard</p>
      </NavLink>
      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-6 py-3.5 px-16 cursor-pointer ${
            isActive && "bg-sky-300 border-r-4 border-red-500"
          }`
        }
      >
        <img src={assets.add_icon} className="w-5" alt="" />
        <p>Add Blog</p>
      </NavLink>
      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-6 py-3.5 px-16 cursor-pointer ${
            isActive && "bg-sky-300 border-r-4 border-red-500"
          }`
        }
      >
        <img src={assets.list_icon} className="w-5" alt="" />
        <p>ListBlog</p>
      </NavLink>
      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-6 py-3.5 px-16 cursor-pointer ${
            isActive && "bg-sky-300 border-r-4 border-red-500"
          }`
        }
      >
        <img src={assets.comment_icon} className="w-5" alt="" />
        <p>Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
