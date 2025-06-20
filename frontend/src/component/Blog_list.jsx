import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import Blogcard from "./Blogcard";
import { useAppContext } from "../context/AppContext";
const Blog_list = () => {
  const { blog, input } = useAppContext();
  console.log("bloo", blog);
  const filterBlogs = () => {
    if (input === "") {
      return blog;
    }
    return blog.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };
  const [menu, setMenu] = useState("All");
  console.log(menu);
  return (
    <div className=" container mx-auto ">
       <div className="flex justify-center items-center gap-2 md:gap-10 relative ">
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
      <div className="grid md:grid-cols-2 mx-4 xs:mx-6 lg:grid-cols-4 gap-4 md:gap-8 ">
        {filterBlogs()
          .filter((tannu) => (menu === "All" ? true : tannu.category === menu))
          .map((items) => (
            <Blogcard key={items._id} blog={items} />
          ))}
      </div>
    </div>
  );
};

export default Blog_list;
