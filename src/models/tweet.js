import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String
    },
    likes: {
        type: Number
    },
    noOfRetweets: { 
        type: Number
    },
    comment: {
        // Defines a field to store MongoDB ObjectId
        type: String
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet