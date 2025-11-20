const postModel = require("../models/post.models");
const generateCaption = require("../services/ai.service");
const uploadFile = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createPostController(req, res) {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ message: "No image uploaded" });

    const base64Image = file.buffer.toString("base64");

    const caption = await generateCaption(base64Image);

    const fileName = `${uuidv4()}.${file.originalname.split(".").pop()}`;
    const result = await uploadFile(file.buffer, fileName);

    const post = await postModel.create({
      caption: caption,
      image: result.url,
      user: req.user._id,
    });

    res.status(201).json({
      message: "Post Created Successfully",
      post: post
    });
  } catch (error) {
    console.error("Post creation error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = { createPostController };
