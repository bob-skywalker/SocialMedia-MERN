import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId
        },
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true 
        },
        senderName: {
            type: String,
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
        isRead: {
            type: Boolean,
            default: false 
        },
        text: {
            type: String,
            required: true 
        },
        createdAt: {
            type: Date,
            default: Date.now 
        },
        updateAt: {
            type: Date, 
            default: Date.now
        }
    }]
}, {timestamps: true});
const Message = mongoose.model("Message", messageSchema);
export default Message; 