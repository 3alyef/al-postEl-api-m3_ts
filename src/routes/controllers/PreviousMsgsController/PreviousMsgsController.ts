import { Request, Response } from "express";

class PreviousMsgsController {
    public previousPost(req: Request, res: Response){
        console.log(req.body)
    }
    
}

const previousMsgsController = new PreviousMsgsController();

export default previousMsgsController;

/* 
As previous messages devem ser mandadas no seguinte formato: 
[{}, {}, {}].
*/