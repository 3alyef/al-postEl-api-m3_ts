import { Request, Response } from "express";
import { msgsUpdateStatusRequest } from "../../interfaces/msgsGetPrev.interface";
import { messageGroupModel } from "../../db/models/Models";

export async function UpdateGroupMsgStatus(req: Request<{body: msgsUpdateStatusRequest}>, res: Response){
    try {
        const {viewStatus, createdIn}: msgsUpdateStatusRequest = req.body;
        const newMsg = await updateStatusMsg({viewStatus, createdIn});
        res.status(200).json(newMsg).end();
    } catch(error){
        console.log("Error: "+error);
        res.status(501).json(null).end();
    }
}

async function updateStatusMsg({createdIn, viewStatus}: msgsUpdateStatusRequest) {
    try {
        const result = await messageGroupModel.updateOne(
            { createdIn },
            { $set: { viewStatus } }
        )

        if (result.modifiedCount === 0) {
            throw new Error("Nenhuma mensagem encontrada para atualizar com o createdIn especificado.");
        }

        return { success: true, message: "Status da mensagem atualizado com sucesso." };

    } catch (error) {
        throw new Error("Ocorreu um erro ao atualizar o status da mensagem no database: " + error);

    }
}
