import express from "express";
import jwt from "jsonwebtoken";

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
