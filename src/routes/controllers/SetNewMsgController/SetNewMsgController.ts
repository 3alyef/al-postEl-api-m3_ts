import { Request, Response } from "express";
import { CreateNewMsg } from "../../../services/Services";
import { msgsResponse } from "../../../interfaces/msgsSetNew.interface";

class SetNewMsgController {
    public async newMsgPost(req: Request<{body: msgsResponse}>, res: Response){     
        new CreateNewMsg().initialize(req, res);    
    }
}

const setNewMsgController = new SetNewMsgController();

export default setNewMsgController;
