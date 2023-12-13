import Message from "../models/Message.js";

export const getMessage = async(req, res) => {
    try {
        const { userId } = req.params;
        const messages = await Message.find({
            $or: [{ senderId: userId }, {receiverId: userId }]
        });
        res.json(messages);
        
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}