import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository{

    constructor(){
        super(Hashtag);
    }

    async bulkCreate(data) {
        try {
            const hashtags = await Hashtag.insertMany(data);
            return hashtags;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async getHashtag(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async getHashtagByName(text) {
        try {
            const hashtag = await Hashtag.find({ text: text });
            return hashtag;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async deleteHashtag(id) {
        try {
            const hashtag = await Hashtag.findByIdAndDelete(id);
            return hashtag;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
};

export default HashtagRepository;