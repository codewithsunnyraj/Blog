import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import moment from "moment";
import Navbar from "../component/Navbar";
import Loader from "../component/Loader";
const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState(" ");
  const fetchComments = async () => {
    setComments(comments_data);
  };
  const fetchBlogData = async () => {
    const value = blog_data.find((item) => item._id === id);
    setData(value);
  };
  const addComment = async (event) => {
    event.preventDefault();
    console.log(name, comment);
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);
  return data ? (
    <div className="relative container mx-auto">
      <Navbar />
      <div>
        <img
          src={assets.gradientBackground}
          className="absolute -top-24 -z-40 "
          alt=""
        />
        <div className="flex justify-center items-center">
          <div className="lg:max-w-5xl ">
            <div className="text-center  mt-14">
              <p className="text-indigo-500  font-semibold">
                Published On {moment(data.createdAt).format("MMMM Do YYYY")}{" "}
              </p>
              <div className="flex justify-center">
                <h3 className="text-4xl max-w-2xl font-semibold my-4">
                  {data.title}
                </h3>
              </div>
              <p className="text-slate-500">{data.subTitle}</p>
              <span className="py-2 px-8 border border-slate-500 bg-indigo-100 inline-block text-indigo-600 my-4 rounded-full">
                Skull Dued
              </span>
            </div>
            <div className="lg:max-w-5xl my-8 lg:my-20">
              <img src={data.image} alt="" className="rounded-2xl" />
            </div>
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
            {/* Comment section start */}
            <div className="my-8">
              <p className="font-bold ">Comment({comments_data.length})</p>
              <div>
                {comments_data.map((items, index) => (
                  <div key={index} className="p-6 my-4 shadow">
                    <div className="flex gap-2 items-center">
                      <img src={assets.user_icon} className="h-10" alt="" />
                      <div>
                        <p className="mt-4">{items.name}</p>
                        <p>{items.content}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-end text-slate-600">
                        {moment(items.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-6 py-8">
              <h3 className="font-semibold text-2xl mb-3">Add Your Comment</h3>
              <form onSubmit={addComment}>
                <div>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    className="py-2 px-2 w-full max-w-2xl outline-none border border-slate-300"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <textarea
                    name="comment"
                    id="comment"
                    value={comment}
                    placeholder="Enter Comment Here"
                    className="py-2 px-2 my-5 w-full max-w-2xl outline-none border border-slate-300 min-h-32"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div>
                  <button className="bg-blue-700 py-2 px-8 rounded text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4 mb-14">
              <div>
                <p className="font-semibold">
                  Share this article on social media
                </p>
                <div className="flex gap-1 my-6">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.googleplus_icon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Loader />
    </div>
  );
};

export default Blog;
