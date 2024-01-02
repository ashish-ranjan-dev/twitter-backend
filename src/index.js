import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";

const app = express();


app.listen(3000,async ()=>{
    console.log("server started");

    connect();
    
    Tweet.create({
        content: "First tweet",
        likes: 25,
        noOfRetweets: 5,
        comment: "first comment"
    })
})


//mongodb+srv://ashish135ranjan:ar123@cluster0.cnanoxc.mongodb.net/?retryWrites=true&w=majority