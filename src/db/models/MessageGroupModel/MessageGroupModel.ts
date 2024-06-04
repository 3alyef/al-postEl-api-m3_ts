import { mongoose } from "../../DB";

const { Schema, model, Types } = mongoose;

const NewMessageGroupSchema = new Schema({
    fromUser: { type: String, required: true },
    deletedTo: { type: String, enum: ["none", "justFrom", "all"], required: true },
    toUsers: { type: [String], required: true },
    viewStatus: { 
        type: Schema.Types.Mixed, 
        validate: {
            validator: function(v: string | MapConstructor) {
                return typeof v === "string" || v instanceof Map;
            },
            message: (props: {value: string}) => `${props.value} is not a valid viewStatus!`
        }
    },
    toGroup: { type: String, required: true },
    message: { type: String, required: true },
    createdIn: { type: String, required: true }
});

NewMessageGroupSchema.methods.toJSON = function() {
    const obj = this.toObject();
    if (obj.viewStatus instanceof Map) {
        obj.viewStatus = Object.fromEntries(obj.viewStatus);
    }
    return obj;
};

const messageGroupModel = model('MessageGroup', NewMessageGroupSchema);

export { messageGroupModel };
