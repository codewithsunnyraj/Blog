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
