import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../util/db";
import { Announce } from "../lib/model/ann";

export async function GET(){
    
    
    //console.log(data);

    let data = []
    let success = true;
        try {
            await mongoose.connect(connectionStr);
            //console.log("Nikl pehli furst me");
            data = await Announce.find();
        }catch(error){
            data = {result:"error"};
            success = false;
        }

    return NextResponse.json({result:data,success});
}

export async function POST(request){
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    let announce = new Announce(payload)
    const result = await announce.save();
    return NextResponse.json({result,success:true});
}