export interface msgsRequest {
    fromUser: string;
    deletedTo: "none" | "justFrom" | "all";
    toUser: string;
    message: string;
    createdIn: string;
}


export interface usersRequest{
    userA: string;
    userB: string;
}