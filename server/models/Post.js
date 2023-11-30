import mongoose from "mongoose";

const CommentLikeSchema = new mongoose.Schema({
    liked: {
        type: Boolean,
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
    }
})

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
        of: CommentLikeSchema
    }
}, {timestamps: true});

const PostLikeSchema = new mongoose.Schema({
    liked: {
        type: Boolean,
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
    }
})


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
        of: PostLikeSchema
    },
    comments: [CommentSchema]
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
export default Post; 