import { Request, Response } from "express";
import { CreateNewMsg } from "../../../services/Services";
import { msgsRequest } from "../../../interfaces/msgsGetPrev.interface";

class SetNewMsgController {
    public async newMsgPost(req: Request<{body: msgsRequest}>, res: Response){     
        new CreateNewMsg().initialize(req, res);    
    }
}

const setNewMsgController = new SetNewMsgController();

export default setNewMsgController;
