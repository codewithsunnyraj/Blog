import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Blog_list from "../component/Blog_list";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const Homes = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Blog_list />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homes;
