import { groupModel } from "../../db/models/Models";
import { msgsGroupDB } from "../../interfaces/group.interface";
class FindGroups {
    public async initialize(userSoul: string){
        const resp = await this.findGroups(userSoul);
        return resp
    }

    private async findGroups(userSoul: string){
        const groups: msgsGroupDB[] = await groupModel.find({ groupParticipants: userSoul}, "_id groupName groupParticipants groupAdministratorParticipants");
        console.log("grupos", groups)
        return groups
    }
}
export default FindGroups;