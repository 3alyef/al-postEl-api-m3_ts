import { mongoose } from "../../DB";

const NewMessageGroupScheme = new mongoose.Schema({
    fromUser: String,
    deletedTo: String,
    viewStatus: String,
    toGroup: String,
    message: String,
    createdIn: String
});

const messageGroupModel = mongoose.model('MessageGroup', NewMessageGroupScheme);

export { messageGroupModel };

