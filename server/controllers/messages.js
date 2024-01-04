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

export const postMessage = async(req, res) => {
    try {
        const { messageId } = req.params;
        
        const messages =  await Message.findById( messageId );
        
        console.log(messages);

        if (!messages) {
            return res.status(404).json({message: 'Message not found!'});
        }

        // const messages = await Message.find({
        //     $or: [{ senderId: userId}, {receiverId: userId}]
        // });
        
        const {senderId, 
               senderName, 
               picturePath, 
               receiverId,
               text } = req.body;
        
        const newMessage = {
            senderId,
            senderName,
            picturePath,
            receiverId,
            text,
            isRead: false
        };

        const updatedMessage = await Message.findByIdAndUpdate(
            messageId,
            { $push: { content: newMessage }},
            { new: true, runValidators: true }
        );

        res.status(200).json(updatedMessage);

    } catch (err) {
        res.status(404).json({message: err.message})
    }
}