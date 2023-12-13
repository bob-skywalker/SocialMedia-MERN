import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    picturePath: {
        type: String,
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String, 
        required: true 
    },
    isRead: {
        type: Boolean,
        default: false 
    }
}, {timestamps: true});
const Message = mongoose.model("Message", messageSchema);
export default Message; 