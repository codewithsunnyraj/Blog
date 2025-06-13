import React from "react";
import { assets } from "../../assets/assets";

const BlogTable = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  console.log(blog);
  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-2 text-nowrap">{index}</th>
      <td className="p-2 text-nowrap">{title}</td>
      <td className="p-2 text-nowrap">{BlogDate.toDateString()}</td>
      <td className="p-2 text-nowrap">
        <p
          className={`${
            blog.isPublished
              ? "text-green-600 text-nowrap"
              : "text-orange-700 text-nowrap"
          }`}
        >{`${blog.isPublished ? "Published" : "Unpublished"}`}</p>
      </td>
      <td className="p-2 flex items-center gap-5">
        <button className="cursor-pointer py-2 px-4 border border-slate-600 text-nowrap">
          {blog.isPublished ? "Unpublished" : "Published"}
        </button>
        <img src={assets.cross_icon} className="cursor-pointer" alt="" />
      </td>
    </tr>
  );
};

export default BlogTable;
