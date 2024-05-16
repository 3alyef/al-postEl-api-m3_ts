import { Request, Response } from "express";
import { messageGroupModel } from "../../db/models/Models";
import { msgsGroupRequest } from "../../interfaces/group.interface";

class CreateNewGroupMsg {
    public async initialize(req: Request<{body: msgsGroupRequest}>, res: Response){
        try {
            const {fromUser, deletedTo, toGroup, message, createdIn}: msgsGroupRequest = req.body;
            //console.log("here =>>",fromUser, toGroup, message, createdIn);
            const newMsg = await this.registrerNewMsg({fromUser, deletedTo, toGroup, message, createdIn});
            res.status(200).json(newMsg).end();
        } catch(error){
            console.log("Error: "+error);
            res.status(501).json(null).end();
        }
        
    }

    private async registrerNewMsg({fromUser, deletedTo, toGroup, message, createdIn}: msgsGroupRequest){
        
        try {
            const newGroupMessage = new messageGroupModel (
                {
                    fromUser,
                    deletedTo,
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