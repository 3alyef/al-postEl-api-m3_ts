import { Request, Response } from "express";
import { messageGroupModel } from "../../db/models/Models";
import { msgsGroupRequest } from "../../interfaces/group.interface";

class CreateNewGroupMsg {
    public async initialize(req: Request<{body: msgsGroupRequest}>, res: Response){
        try {
            const {fromUser, toGroup, message, createdIn} = req.body;
            //console.log("here =>>",fromUser, toGroup, message, createdIn);
            const newMsg = await this.registrerNewMsg(fromUser, toGroup, message, createdIn);
            res.status(200).json(newMsg).end();
        } catch(error){
            console.log("Error: "+error);
            res.status(501).json(null).end();
        }
        
    }

    private async registrerNewMsg(fromUser: string, toGroup:string, message: string, createdIn: string){
        
        try {
            const newGroupMessage = new messageGroupModel (
                {
                    fromUser,
                    isDeletedToFrom: false,
                    toGroup,
                    message,
                    createdIn
                }
            )

            await newGroupMessage.save();
            return newGroupMessage;

        } catch (error) {
            throw new Error("Ocorreu um erro ao registrar uma nova mensagem no database.");

        }
    }

    
}

export default CreateNewGroupMsg;