import express from "express" 
import compression from "compression"
import methodOverride from "method-override"
import cors from "cors"
import authRouter from "../src/app/auth/authRoute.js"

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride());
app.use(cors());

app.use("/auth", authRouter);

export default app;