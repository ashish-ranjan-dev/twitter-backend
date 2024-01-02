import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
            throw error;
        }
    };

    async getAllTweets() {
        try {
            const tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async getTweet(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async deleteTweet(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
};

export default TweetRepository;