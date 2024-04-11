import { mongoose } from "../../DB";

const NewGroupSchema = new mongoose.Schema({
    groupName: String,
    groupParticipants: [String],
    groupAdministratorParticipants: [String]
});

const groupModel = mongoose.model('Group', NewGroupSchema);

export { groupModel };

