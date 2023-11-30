import mongoose from "mongoose";
import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async(req, res) => {
    try {
        const { userId, description, picturePath } = req.body;

        const imagePath = req.files['image'] ? req.files['image'][0].path : null;
        const audioPath = req.files['audio'] ? req.files['audio'][0].path : null;

        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath: imagePath,
            audioPath: audioPath,
            likes: {},
            comments: []
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);

    } catch (error){
        res.status(409).json({message: error.message})
    }
}

/* READ */
export const getFeedPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        if (!posts) {
            res.status(404).json({message: "We cannot find any posts!"});
        }
        res.status(200).json(posts);

    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const getUserPosts = async(req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId: userId });
        res.status(200).json(post);


    } catch (error){
        res.status(404).json({message: error.message});
    }
}

/* UPDATE */ 
export const likePost = async(req, res) => {
    try {
        const { id } = req.params; 
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        //Find the User; 
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json("Cannot find user!");
        }

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, {liked: true, firstName: user.firstName, lastName: user.lastName});
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id, 
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);

    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const likeComment = async(req, res) => {
    try {
        // commentId
        const { postId, commentId } = req.params;
        const { userId } = req.body;

        //Fetch Post
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({message: "Post not found!"})
        }

        //Fetch the User 
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "User not found!"});
        }

        //Fetch the Comment
        const comment = post.comments.find(comment => comment._id.toString() === commentId);

        if (!comment) {
            return res.status(404).json({message: "Comment not found!"});
        }
        const commentLike = comment.commentLikes.get(userId);
        if (commentLike && commentLike.liked) {
            comment.commentLikes.delete(userId)
        } else {
            comment.commentLikes.set(userId, { liked: true, firstName: user.firstName, lastName: user.lastName})
        }

        await post.save();
        res.status(200).json(post);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
