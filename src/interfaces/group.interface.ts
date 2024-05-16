export interface newGroup {
    groupName: string;
    groupParticipants: string[];
    groupAdministratorParticipants: string[]
}

export interface msgsGroupRequest {
    fromUser: string;
    deletedTo: "none" | "justFrom" | "all";
    toGroup: string;
    message: string;
    createdIn: string;
}
