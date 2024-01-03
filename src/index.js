import express from "express";
import connect from "./config/database.js";
import passport from "passport";
import router from "./routes/index.js";
import passportAuth from "./middlewares/jwt-middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api",router);


app.listen(3000,async ()=>{
    console.log("server started");

    connect();
    
    // Tweet.create({
    //     content: "First tweet",
    //     likes: 25,
    //     noOfRetweets: 5,
    //     comment: "first comment"
    // })

    // Hashtag.create({
    //     text: "travel",
    //     tweets: ['6593c705ca36ba1ac03d678a']
    // })

    // const tweetRepo = new TweetRepository();

    // let tweets = await tweetRepo.deleteTweet('6593c705ca36ba1ac03d678a');
    // console.log(tweets);


})