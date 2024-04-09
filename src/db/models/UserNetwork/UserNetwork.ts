import { mongoose } from "../../DB";

const NewUserNetwork = new mongoose.Schema({
    user: String,
    friend: String,
    createdIn: String
});

const userNetworkModel = mongoose.model('UserNetwork', NewUserNetwork);

export { userNetworkModel };

