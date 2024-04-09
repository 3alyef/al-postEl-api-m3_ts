import { Request, Response } from "express";
import { userNetworkModel } from "../../db/models/Models";
import { networkRequest } from "../../interfaces/userNetworkSetNew.interface";

class CreateNewUserNetwork {
    public async initialize(req: Request<{body: networkRequest}>, res: Response){
        try {
            const { user, friend, createdIn }: networkRequest = req.body;
            const newNetwork = await this.registrerNewNetwork(user, friend, createdIn);
            res.status(200).json(newNetwork).end();
        } catch(error){
            console.log("Error: "+error);
            res.status(501).json(null).end();
        }
    }

    private async registrerNewNetwork(user: string, friend:string, createdIn: string){   
        try {
            const newNetwork = new userNetworkModel (
                {
                    user,
                    friend,
                    createdIn
                }
            )

            await newNetwork.save();
            return newNetwork;

        } catch (error) {
            throw new Error("Ocorreu um erro ao registrar um novo newtwork no database.");

        }
    }
}

export default CreateNewUserNetwork;