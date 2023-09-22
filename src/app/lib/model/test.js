import mongoose from "mongoose";

const testModel = new mongoose.Schema({
    //name 
    name:String,
    //status
    status:String,
    //Project Value
    "Project Value":String
});

export const Test = mongoose.models.tests || mongoose.model("tests",testModel);
