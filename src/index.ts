import Server from "./server";
import dotenv from "dotenv";

dotenv.config();

const PORT: string = process.env.PORT || "3000"

new Server().server.listen(PORT, 
    function (){
        console.log(`Server is running on port ${PORT}`);
    }
);