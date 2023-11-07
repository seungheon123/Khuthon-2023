import express from "express" 
import compression from "compression"
import methodOverride from "method-override"
import cors from "cors"
import userRouter from "../src/app/User/userRoute.js";

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride());
app.use(cors());

export default app;