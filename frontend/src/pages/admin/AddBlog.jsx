import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  const generateContent = async () => {};

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
              <button
                type="button"
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
              name=""
              checked={isPublished}
              className="scale-90 cursor-pointer"
              onChange={(e) => {
                setIsPublished(e.target.checked);
              }}
            />
          </div>
          <div className="my-4">
            <button
              className="bg-blue-600 cursor-pointer py-2 px-4 w-full rounded-sm text-white"
              type="submit"
            >
              Add Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
