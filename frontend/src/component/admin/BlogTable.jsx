import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const BlogTable = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();
  const deleteBlog = async () => {
    const confirm = window.confirm("Are You Sure You Want to delete the blog");
    if (!confirm) return;
    try {
      const { data } = await axios.delete("/api/blog/blogDelete", {
        data: { _id: blog._id },
      });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const togglePublished = async () => {
    try {
      const _id = blog._id;
      const { data } = await axios.post("/api/blog/toggle", { _id });
      console.log("toggle", data);
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-2 text-nowrap">{index}</th>
      <td className="p-2 text-nowrap">{blog.title}</td>
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
        <button
          onClick={togglePublished}
          className="cursor-pointer py-2 px-4 border border-slate-600 text-nowrap"
        >
          {blog.isPublished ? "Unpublished" : "Published"}
        </button>
        <img
          src={assets.cross_icon}
          onClick={deleteBlog}
          className="cursor-pointer"
          alt=""
        />
      </td>
    </tr>
  );
};

export default BlogTable;
