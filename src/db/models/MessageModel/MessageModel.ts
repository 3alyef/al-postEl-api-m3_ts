import { mongoose } from "../../DB";

const NewMessageScheme = new mongoose.Schema({
    fromUser: String,
    isDeletedToFrom: Boolean,
    toUser: String,
    message: String,
    createdIn: String
});

const messageModel = mongoose.model('Message', NewMessageScheme);

export { messageModel };

