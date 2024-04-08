export interface msgsResponse {
    _id: string;
    fromUser: string;
    toUser: string;
    msgs: string;
    createdIn: string;
}

export interface msgsRequest {
    userA: string;
    userB: string;
}