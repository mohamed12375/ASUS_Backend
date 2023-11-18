const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{ //order number
        type: Number,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    author:{
        type: Number,
        required: true
    }
},{timestamps: true}
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;