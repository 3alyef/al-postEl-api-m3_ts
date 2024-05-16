export interface msgsResponse {
    _id: string;
    fromUser: string;
    deletedTo: "none" | "justFrom" | "all";
    toUser: string;
    message: string;
    createdIn: string;
}

export interface GroupsProps {
    _id: string;
    groupName: string ;
    groupParticipants: string ;
    groupAdministratorParticipants: string
}