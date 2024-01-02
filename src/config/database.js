import mongoose from "mongoose";

const connect = async ()=>{
    await mongoose.connect('mongodb+srv://ashish135ranjan:ar123@cluster0.cnanoxc.mongodb.net/?retryWrites=true&w=majority');

    console.log("mongo db connected");
}

export default connect