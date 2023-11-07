import dotenv from "dotenv"
import app from "./config/express.js";
dotenv.config();

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`server is ready ${process.env.SERVER_PORT}`);
});
