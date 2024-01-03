import TweetRepository from "../repository/tweet-repository.js";
import LikeRepository from "../repository/like-repository.js";
import CommentRepository from "../repository/comment-repository.js";

class LikeService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.likeRepository = new LikeRepository();
        this.commentRepository = new CommentRepository();
    };

    async toggleLike(data) {
        let likeable;
        try {
            if (data.modelType == "Tweet") {
                likeable = await this.tweetRepository.get(data.modelId);
            } else if (data.modelType == "Comment") {
                likeable = await this.commentRepository.get(data.modelId);
            }
        } catch (error) {
            throw error;
        }
        const exists = await this.likeRepository.findByUserAndLikable({
            user: data.userId,
            onModel: data.modelType,
            likeable: data.modelId
        });
        let isAdded;
        if (exists) {
            var index = likeable.likes.indexOf(exists._id);
            if (index !== -1) {
                likeable.likes.splice(index, 1);
            }
            await likeable.save();
            try {
                await this.likeRepository.destroy({ _id: exists._id });
            } catch (error) {
                console.log(error)
                throw error;
            }
            isAdded = false;
        } else {
            const newLike = await this.likeRepository.create({
                user: data.userId,
                onModel: data.modelType,
                likeable: data.modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded = true;
        }
        return isAdded;
    };
};

export default LikeService;