import { Request, Response, Router } from "express";
import * as Controll from "./controllers/Controllers";
const router: Router = Router();

router.get("/",(req: Request, res: Response)=>{
    res.status(200).send("Hello, Welcome to Al postEl M3!")
})

router.post("/previousMsgs", Controll.previousMsgsController.previousPost);
router.post("/setNewMsg", Controll.setNewMsgController.newMsgPost)



export default router;



