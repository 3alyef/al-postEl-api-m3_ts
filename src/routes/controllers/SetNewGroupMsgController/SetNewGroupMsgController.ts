import { Request, Response } from "express";
import { CreateNewGroupMsg } from "../../../services/Services";
import { msgsGroupRequest } from "../../../interfaces/group.interface";

class SetNewGroupMsgController {
    public async newGroupMsgPost(req: Request<{body: msgsGroupRequest}>, res: Response){
        new CreateNewGroupMsg().initialize(req, res);    
    }
}

const setNewGroupMsgController = new SetNewGroupMsgController();

export default setNewGroupMsgController;