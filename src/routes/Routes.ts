import { Request, Response, Router } from "express";
import * as Controll from "./controllers/Controllers";
const router: Router = Router();

router.get("/",(req: Request, res: Response)=>{
    res.status(200).send("Hello, Welcome to Al postEl M3!")
})


router.post("/previousMsgs", Controll.previousMsgsController.previousPost);
router.post("/setNewMsg", Controll.setNewMsgController.newMsgPost);


// STATUS
router.post("/statusMsgUpdate", Controll.setNewMsgController.setStatusMsgPost)
//

router.post("/previousGroupMsgs", Controll.previousGroupsMsgController.previousGroupMsgPost);
router.post("/setNewGroupMsg", Controll.setNewGroupMsgController.newGroupMsgPost)

// STATUS
router.post("/statusGroupMsgUpdate", Controll.setNewGroupMsgController.setStatusGroupMsgPost)
//

router.post("/previousNetwork", Controll.previousUserNetworkController.previousUserNetworkPost);
router.post("/setNewNetwork", Controll.setNewUserNetworkController.newUserNetworkPost);

router.post("/newGroup", Controll.setNewGroupController.newGroupPost);

router.post("/previousGroups", Controll.previousGroupsController.previousGroupsPost);

export default router;



