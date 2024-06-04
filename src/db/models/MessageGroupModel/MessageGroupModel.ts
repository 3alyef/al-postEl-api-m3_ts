import { mongoose } from "../../DB";

const { Schema, model } = mongoose;
const NewMessageGroupSchema = new Schema({
    fromUser: { type: String, required: true },
    deletedTo: { 
        type: Schema.Types.Mixed, 
        required: true,
        validate: {
            validator: function(v: string | MapConstructor) {
                if (v === "none") return true;
                if (v instanceof Map) {
                    for (let val of v.values()) {
                        if (!["justTo", "justFrom", "all"].includes(val)) return false;
                    }
                    return true;
                }
                return false;
            },
            message: (props: {value: string}) => `${props.value} is not a valid deletedTo value!`
        }
    },
    toUsers: { type: [String], required: true },
    viewStatus: { 
        type: Schema.Types.Mixed, 
        validate: {
            validator: function(v: string | MapConstructor) {
                if (v === "onServer") return true;
                if (v instanceof Map) {
                    for (let val of v.values()) {
                        if (!["delivered", "seen"].includes(val)) return false;
                    }
                    return true;
                }
                return false;
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
    if (obj.deletedTo instanceof Map) {
        obj.deletedTo = Object.fromEntries(obj.deletedTo);
    }
    if (obj.viewStatus instanceof Map) {
        obj.viewStatus = Object.fromEntries(obj.viewStatus);
    }
    return obj;
};

const messageGroupModel = model('MessageGroup', NewMessageGroupSchema);

export { messageGroupModel };
