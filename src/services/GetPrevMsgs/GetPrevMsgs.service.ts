import { Request, Response } from "express";
import { messageModel } from "../../db/models/Models";
import { msgsDB, msgsResponse } from "../../interfaces/msgsSetNew.interface";
import { usersRequest } from "../../interfaces/msgsGetPrev.interface";


class GetPrevMsgs {
    public async initialize(req: Request<{body: usersRequest}>, res: Response){
        try{
            const {userA, userB} = req.body;
            if(userA && userB){
                const resp = await this.findMessages(userA, userB);
                console.log(resp)
                res.status(200).send(JSON.stringify(resp)).end();
            } else {
                res.status(401).send(JSON.stringify(null)).end();
            }
        } catch(error){
            console.log("Error ao buscar previous messages"+ error);
            res.status(500).send(JSON.stringify({ error })).end();
        }
        
    }

    private async findMessages(userA: string, userB: string){
        try{
            const messages: msgsDB[] = await messageModel.find({ fromUser: userA, toUser: userB }, "_id fromUser toUser message createdIn");

            let msg: msgsResponse[] = [];
            
            messages.forEach((el)=>{
                const msgObj: msgsResponse = {
                    _id: el._id, fromUser: el.fromUser, toUser: el.toUser, msg: el.message, createdIn: el.createdIn
                }
                msg.push(msgObj)

            })
            return msg
        } catch(error){       
            console.log("error ao usar model"+ error)
            return null
        }
        
    }
}

export default GetPrevMsgs;