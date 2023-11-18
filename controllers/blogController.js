const Blog = require("../models/blog");

const createNewBlog = (req,res) => {
    const newblog = new Blog(req.body);
    newblog.save()
        .then(result => res.json({ Blog: newblog}))
        .catch(err => console.log(err));
}

const ShowBlogs = (req,res) =>{
    console.log("sss")
    Blog.find().sort({createdAt: -1 })
    .then(result => {
        res.json({ Blogs: result})
    })
}

const DeleteBlog = (req,res) => {
    (req,res) => {
        const id = req.params.id;
        Blog.findByIdAndDelete(id)
            .then( result => res.json({ redirect: '/blogs'}))
            .catch(err => console.log(err));
    }

}

module.exports = {
    createNewBlog,
    ShowBlogs,
    DeleteBlog
}