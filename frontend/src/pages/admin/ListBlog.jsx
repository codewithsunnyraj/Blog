import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../assets/assets";
import BlogTable from "../../component/admin/BlogTable";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const { axios } = useAppContext();
  const [blog, setBlog] = useState([]);
  const fetchBlogs = async () => {
    try {
      const data = await axios.post("/api/admin/blogs");
      console.log("data aya", data);
      const response = data.data.blogs;
      if (data.data.success) {
        setBlog(response);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex-1 px-16">
      <div className="">
        <h3 className="my-4 font-semibold text-xl">All Blogs</h3>
        <div className="">
          <table>
            <thead>
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">BLOG TITLE</th>
                <th className="p-2">DATE</th>
                <th className="p-2">STATUS</th>
                <th className="p-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {blog.map((blog, index) => {
                return (
                  <BlogTable
                    blog={blog}
                    key={blog._id}
                    index={index + 1}
                    fetchBlogs={fetchBlogs}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
