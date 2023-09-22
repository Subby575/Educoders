import mongoose from "mongoose";

const doubtModel = new mongoose.Schema({
    //name 
    question:String,
    //status
    answer:String,
    subject:String,
    date:String,
    author:String
    //Project Value
    //"Project Value":String
});

export const Doubt = mongoose.models.doubts || mongoose.model("doubts",doubtModel);
