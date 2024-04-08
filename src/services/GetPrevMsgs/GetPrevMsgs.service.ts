import { messageModel } from "../../db/models/Models";

class GetPrevMsgs {
    public async initialize(userA: string, userB: string){
        try{
            console.log('here')
            return this.findMessages(userA, userB);
        } catch(error){
            console.log("Error ao buscar previous messages"+ error)
            return null;
        }
        
    }

    private async findMessages(userA: string, userB: string){
        try{
            const messages = await messageModel.find({ fromUser: userA, toUser: userB }, "_id fromUser toUser message createdIn");
            console.log(messages)
            return messages
        } catch(error){       
            console.log("error ao usar model"+ error)
            return null
        }
        
    }
}

export default GetPrevMsgs;