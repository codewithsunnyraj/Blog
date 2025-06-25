import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useAppContext } from "../../context/AppContext";
import { parse } from "marked";
import toast from "react-hot-toast";
const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const { axios } = useAppContext();
  const [isAdding, SetIsAdding] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      SetIsAdding(true);
      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };
      console.log("blog data sunny", blog);
      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error kya hai ji", error);
      toast.error(error.message);
    } finally {
      SetIsAdding(false);
    }
  };
  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title");
    try {
      SetLoading(true);
      const { data } = await axios.post("/api/blog/generate", {
        prompt: title,
      });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      SetLoading(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);
  return (
    <div className="px-16">
      <form onSubmit={onSubmitHandler} className="shadow p-8 w-3xl">
        <div className="">
          <p>Upload thumbnail</p>
          <label htmlFor="image">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              className="mt-2 h-16 rounded cursor-pointer"
              name="image"
              alt=""
            />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              id="image"
              hidden
              required
            />
          </label>
          <div className="mt-8">
            <p>Blog Title</p>
            <input
              type="text"
              placeholder="Enter Title"
              required
              value={title}
              name="title"
              className="w-full border-b outline-none py-2 px-3"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="my-3">
            <p>Sub Title</p>
            <input
              type="text"
              placeholder="Enter Sub Title"
              required
              value={subTitle}
              name="subTitle"
              className="w-full border-b outline-none py-2 px-3"
              onChange={(e) => {
                setSubTitle(e.target.value);
              }}
            />
          </div>
          <div className="">
            <p>Blog Description</p>
            <div className="w-full h-74 pb-16 sm:pb-10 pt-2 relative">
              <div ref={editorRef}></div>
              {loading && (
                <div className="absolute right-0 top-0 left-0 bottom-0 flex items-center justify-center bg-black mt-2">
                  <div className="w-8 h-8 rounded-full border-2 border-t-white animate-spin"></div>
                </div>
              )}
              <button
                type="button"
                disabled={loading}
                className="absolute bottom-1 cursor-pointer right-2 ml-2 bg-black text-white px-6 py-2"
                onClick={generateContent}
              >
                Generate With AI
              </button>
            </div>
          </div>
          <div className="my-4">
            <p>Blog Description</p>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="category"
              className=" w-full text-gray-500 outline-none rounded border py-2 border-gray-300"
              id=""
            >
              <option value="">Select Category</option>
              {blogCategories.map((items, index) => {
                return (
                  <option value={items} key={index}>
                    {items}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p>Published Now</p>
            <input
              type="checkbox"
              name="isPublished"
              checked={isPublished}
              className="scale-90 cursor-pointer"
              onChange={(e) => {
                setIsPublished(e.target.checked);
              }}
            />
          </div>
          <div className="my-4">
            <button
              disabled={isAdding}
              className="bg-blue-600 cursor-pointer py-2 px-4 w-full rounded-sm text-white"
              type="submit"
            >
              {isAdding ? "Adding...." : "Add Blog"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
