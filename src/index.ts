import Server from "./server";
import dotenv from "dotenv";
import { authenticate } from "./db/DB";
dotenv.config();

const PORT: string = process.env.PORT || "3000";

authenticate();

new Server().server.listen(PORT, 
    function (){
        console.log(`Server is running on port ${PORT}`);
    }
);