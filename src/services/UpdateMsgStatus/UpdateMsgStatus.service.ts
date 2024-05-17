import { Request, Response } from "express";
import { messageModel } from "../../db/models/Models";
import { msgsUpdateStatusRequest } from "../../interfaces/msgsGetPrev.interface";

export async function UpdateMsgStatus(req: Request<{body: msgsUpdateStatusRequest}>, res: Response){
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
        const result = await messageModel.updateOne(
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
