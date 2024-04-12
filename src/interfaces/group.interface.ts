export interface newGroup {
    groupName: string;
    groupParticipants: string[];
    groupAdministratorParticipants: string[]
}
export interface msgsGroupDB {
    _id: string;
    fromUser: string;
    toGroup: string;
    message: string;
    createdIn: string;
}

export interface msgsGroupRequest {
    fromUser: string;
    toGroup: string;
    message: string;
    createdIn: string;
}
