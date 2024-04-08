import { Request, Response } from "express";
import { msgsRequest } from "../../../interfaces/msgs.interface";
import { GetPrevMsgs } from "../../../services/Services";
class PreviousMsgsController {
    public async previousPost(req: Request<{body: msgsRequest}>, res: Response){
        const { userA, userB } = req.body;
        // console.log(userA, userB);
        if(userA && userB){
            const resp = await this.getPreviousMsgs(userA, userB)
            res.status(200).send(JSON.stringify(resp)).end();
        } else {
            res.status(401).send(JSON.stringify(null)).end();
        }

    }

    private async getPreviousMsgs(userA: string, userB: string){
        
        return await new GetPrevMsgs().initialize(userA, userB);
    }
    
}

const previousMsgsController = new PreviousMsgsController();

export default previousMsgsController;

/* 
As previous messages devem ser mandadas no seguinte formato: 
[{}, {}, {}].
*/