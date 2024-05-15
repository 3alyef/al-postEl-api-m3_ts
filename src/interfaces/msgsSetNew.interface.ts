export interface msgsResponse {
    _id: string;
    fromUser: string;
    isDeletedToFrom: boolean;
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