import React from "react";
import { assets, footer_data } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="grid py-10 border-b md:grid-cols-2 lg:grid-cols-4 m-3 md:m-0 gap-4 lg:gap-8">
        <div className="">
          <img src={assets.logo} className="mb-3 w-36 " alt="" />
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            laudantium sunt quibusdam quis facere eos laborum
          </p>
        </div>
        {footer_data.map((items, index) => (
          <div key={index} className="md:flex justify-center">
            <div>
              <div className="text-xl font-semibold">{items.title}</div>
              <div className="mt-2">
                {items.links.map((items, index) => (
                  <Link to={`${items}`} className="block hover:text-blue-800 duration-300 transition-all  py-1" key={index}>
                    {items}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="xs:py-4 py-2">
        <p className="text-center">
          Copyrights 2025 &copy; QuickBlog All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
