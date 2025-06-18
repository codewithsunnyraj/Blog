import jwt from "jsonwebtoken";

export const Auth = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Invalid Token",
    });
  }
};
