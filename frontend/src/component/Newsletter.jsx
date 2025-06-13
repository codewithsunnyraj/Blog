import React from "react";

const Newsletter = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center m-3 md:m-5 items-center  md:my-16">
        <div className="text-center">
          <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">Never Miss a Blog!</h3>
          <p className="py-3 xs:text-xl text-slate-500">
            Subscribe to get the latest blog, new tech, and exclusive news.
          </p>
          <div className="my-8">
            <form className="max-w-2xl flex rounded border border-gray-600">
              <input
                type="text"
                placeholder="Enter Your emaid Id"
                className="outline-none pl-3 pr-3 w-[70%]"
              />
              <button className="rounded-r w-[30%] cursor-pointer text-white py-3 bg-blue-600 px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
