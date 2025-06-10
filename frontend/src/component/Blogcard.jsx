import React from "react";
import { useNavigate } from "react-router-dom";
const Blogcard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/blog/${_id}`);
      }}
      className="cursor-pointer transition-all hover:scale-95 duration-300 shadow my-10"
    >
      <div>
        <img src={image} className="aspect-video rounded-t-xl" alt="" />
        <span className="bg-sky-100 py-1 mx-4 mt-4 px-4  inline-block rounded-full text-indigo-500">
          {category}
        </span>
        <div className="p-5">
          <h6 className="text-black font-semibold">{title}</h6>
          <p dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
