import express from "express";
import {createTweet,getTweet} from "../controllers/tweet-controller.js"
import {signUp,signIn} from "../controllers/user-controller.js"

const router = express.Router();

router.post('/tweets',createTweet);

router.get('/tweets/:id',getTweet);

router.post('/signup',signUp)

router.post('/signin',signIn)

export default router;