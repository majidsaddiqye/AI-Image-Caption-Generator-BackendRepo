const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middlewares");
const {createPostController} = require("../controllers/post.Controller");
const multer = require("multer");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", authMiddleware, upload.single("image"), createPostController);

module.exports = router;
