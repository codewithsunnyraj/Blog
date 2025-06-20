import express from "express";
import jwt from "jsonwebtoken";
import { Blog } from "../model/blog.model.js";
import { comment } from "../model/comment.model.js";

export const adminLogin = async (req, res) => {


  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(404).json({
        message: "Enter All Fields",
        success: false,
      });
    }

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      res.status(404).json({
        message: "Invalid Credentials",
        success: false,
      });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.status(200).json({
      success: true,
      token: token,
      message: "User Login Successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while login",
      error: error,
      success: false,
    });
  }
};

//Access all blog data for admin
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const data = await Blog.find({});
    res.status(200).json({
      success: true,
      message: "Get all blog data",
      data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while Fetching Blog Data",
      error: error,
      success: false,
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const allComments = await comment
      .find({})
      .populate("blog")
      .sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Get All Comments",
      allComments,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while Access Comments",
      error: error,
      success: false,
    });
  }
};

//All data that is display on card
export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blog = await Blog.countDocuments();
    const comments = await comment.countDocuments();
    const drafts = await Blog.countDocuments({ isPublished: false });
    const dashboardData = {
      blog,
      comments,
      drafts,
      recentBlogs,
    };
    res.status(200).json({
      message: "Access Dashboard data successfully",
      success: true,
      dashboardData,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while login",
      error: error,
      success: false,
    });
  }
};

//Admin power deleted and approve comment
export const deleteCommentsById = async (req, res) => {
  try {
    const { _id } = req.body;
    const commentDelete = await comment.findByIdAndDelete(_id);
    res.status(200).json({
      success: true,
      message: "Comment Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while Deleting Comments",
      error: error,
      success: false,
    });
  }
};

//Approve comment
export const approveComments = async (req, res) => {
  try {
    const { _id } = req.body;
    const commentApprove = await comment.findByIdAndUpdate(_id, {
      isApproved: true,
    });
    // commentApprove.isApproved = !commentApprove.isApproved;
    // await commentApprove.save();
    res.status(200).json({
      success: true,
      token: token,
      message: "",
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while Approving comments",
      error: error,
      success: false,
    });
  }
};
