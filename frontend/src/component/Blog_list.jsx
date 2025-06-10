import React, { useState } from "react";
import { blogCategories } from "../assets/assets";
import { motion } from "motion/react";
const Blog_list = () => {
  const [menu, setMenu] = useState("All");
  console.log(menu);
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center gap-10 relative ">
        {blogCategories.map((items) => (
          <div key={items} className="relative">
            <button
              onClick={() => setMenu(items)}
              className={`cursor-pointer text-gray-500 ${
                items === menu && "text-white px-5 pt-0.5"
              }`}
            >
              {items}
              {menu === items && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute bg-blue-600 text-white right-0 top-0 h-7 -z-1 rounded-full left-0"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog_list;
