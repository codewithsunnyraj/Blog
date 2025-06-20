import fs from "fs";
import imagekit from "../config/ImageKit.js";
import { Blog } from "../model/blog.model.js";
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = req.body;
    const imageFile = req.file;

    if (!title) {
      return res.status(404).json({
        message: "Enter Title",
        success: false,
      });
    } else if (!subTitle) {
      return res.status(404).json({
        message: "Enter subTitle",
        success: false,
      });
    } else if (!description) {
      return res.status(404).json({
        message: "Enter description",
        success: false,
      });
    } else if (!category) {
      return res.status(404).json({
        message: "Enter category",
        success: false,
      });
    } else if (!isPublished) {
      return res.status(404).json({
        message: "Enter isPublished",
        success: false,
      });
    } else if (!imageFile) {
      return res.status(404).json({
        message: "Select imageFile",
        success: false,
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    //Optimize image
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    const image = optimizedImageUrl;
    const Data = { title, subTitle, description, category, isPublished, image };
    const blogData = await Blog(Data);
    await blogData.save();
    res.status(200).json({
      message: "Blog Added Successfully",
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while Adding Blog",
      success: false,
      error: error,
    });
    console.log(error);
  }
};

// Fetch Blog
export const fetchBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.status(200).json({
      message: "Fetch all published Blog",
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error While Fetching Blog",
      success: false,
    });
  }
};

//Fetch Blog By Id
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        message: "Blog Not Found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Blog Show By Id",
      success: true,
      blog,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error While Fetching Blog Data",
      success: false,
    });
  }
};

//Delete Blog
export const deleteBlog = async (req, res) => {
  const { _id } = req.body;
  try {
    const blog = await Blog.findByIdAndDelete({ _id });
    res.status(200).json({
      message: "Blog Deleted Successfully",
      success: true,
      blog,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: "Error while Deleting Blog",
      success: false,
    });
  }
};





//togglePublished
export const togglePublish = async (req, res) => {
  try {
    const { _id } = req.body;
    const blog = await Blog.findById(_id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.status(200).json({
      message: "Blog Status Updated",
      success: true,
      blog,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error while Toggle Blog To Publish",
      success: false,
    });
  }
};
