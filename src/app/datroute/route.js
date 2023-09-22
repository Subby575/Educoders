import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../util/db";
import { Data } from "../lib/model/dat";

export async function GET(){
    
    
    //console.log(data);

    let data = []
        try {
            await mongoose.connect(connectionStr);
            //console.log("Nikl pehli furst me");
            data = await Data.find();
        }catch(error){
            data = {success:false}
        }

    return NextResponse.json({result:data,success:true});
}

// export async function POST(request){
//     const payload = await request.json();
//     await mongoose.connect(connectionStr);
//     let datac = new Data(payload)
//     const result = await datac.save();
//     return NextResponse.json({result,success:true});
// }