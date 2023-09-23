import mongoose from "mongoose";

const blogModel = new mongoose.Schema({
    //name 
    title:String,
    //status
    desc:String,
    author:String
    //Project Value
    //"Project Value":String
});

export const Blog = mongoose.models.blogs || mongoose.model("blogs",blogModel);
