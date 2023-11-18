const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blogController");

router.get("/", BlogController.ShowBlogs);

router.post("/", BlogController.createNewBlog);

//Details panel
//router.get("/:id", BlogController.FindBlog);

//Delete Blog
router.delete("/:id", BlogController.DeleteBlog);


module.exports = router;