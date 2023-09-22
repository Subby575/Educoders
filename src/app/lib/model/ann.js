import mongoose from "mongoose";

const announceModel = new mongoose.Schema({
    //name 
    an:String,
    //status
    author:String,
    //Project Value
    //"Project Value":String
    /*{
        an:"Hello!,Please note that today's lecture will start at 1.35 PM (not at 1.20 PM).",
        author:"Akash Sharma"
    }*/ 
});

export const Announce = mongoose.models.announces || mongoose.model("announces",announceModel);