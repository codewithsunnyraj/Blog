import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTable from "../../component/admin/BlogTable";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboard = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboard();
  }, []);
  return (
    <div className="flex-1 px-16">
      <div className="flex gap-10 flex-wrap">
        <div className="border p-4 w-64 shadow rounded flex items-center">
          <div>
            <img src={assets.dashboard_icon_1} alt="" />
          </div>
          <div className="pl-2">
            <p>{dashboardData.blogs}</p>
            <span>Blogs</span>
          </div>
        </div>
        <div className="border p-4 w-64 shadow rounded flex items-center">
          <div>
            <img src={assets.dashboard_icon_2} alt="" />
          </div>
          <div className="pl-2">
            <p>{dashboardData.comments}</p>
            <span>Comments</span>
          </div>
        </div>
        <div className="border p-4 w-64 shadow rounded flex items-center">
          <div>
            <img src={assets.dashboard_icon_3} alt="" />
          </div>
          <div className="pl-2">
            <p>{dashboardData.drafts}</p>
            <span>Drafts</span>
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-6">
        <div className="flex gap-4 items-center">
          <img src={assets.dashboard_icon_4} alt="" />
          <p className="font-semibold">Latest Blogs</p>
        </div>
      </div>
      <div className="relative  overflow-x-auto ">
        <table className="w-full">
          <thead>
            <tr className="">
              <th>#</th>
              <th>BLOG TITLE</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.recentBlogs.map((blog, index) => {
              return (
                <BlogTable
                  blog={blog}
                  key={blog._id}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
