import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true 
    },
    userId: {
        type: String,
        required: true 
    },
    firstName: {
        type: String,
        required: true, 
        min: 2, 
        max: 50 
    }, 
    lastName: {
        type: String,
        required: true, 
        min: 2, 
        max: 50 
    },
    userPicturePath: String,
    commentLikes: {
        type: Map, 
        of: Boolean
    }
}, {timestamps: true});

const PostSchema = new mongoose.Schema({
    userId: {
        type: String, 
        required: true 
    },
    firstName: {
        type: String,
        required: true, 
        min: 2, 
        max: 50 
    }, 
    lastName: {
        type: String,
        required: true, 
        min: 2, 
        max: 50 
    },
    location: String ,
    description: String, 
    picturePath: String, 
    audioPath: String,
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean
    },
    comments: [CommentSchema]
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
export default Post; 