import mongoose from "mongoose";
import { MongoDBURI } from "./server-config.js";

const connect = async ()=>{
    await mongoose.connect(MongoDBURI);

    console.log("mongo db connected");
}

export default connect