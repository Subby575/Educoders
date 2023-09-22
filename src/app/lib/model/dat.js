import mongoose from "mongoose";

const dataModel = new mongoose.Schema({
    //name 
    name:String,
    //status
    studentid:Number,
    class:Number,
    rank:Number,
    chapter:[String],
    level: Number,
    task: Number,
    progress: Number,
    asstask:String
    //Project Value
    //"Project Value":String
});

export const Data = mongoose.models.datas || mongoose.model("datas",dataModel);
