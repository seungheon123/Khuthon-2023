import express from "express" 
import compression from "compression"
import methodOverride from "method-override"
import cors from "cors"
import authRouter from "../src/app/auth/authRoute.js"
import queRouter from "../src/app/question/questionRoute.js";
import workbookRouter from "../src/app/workbook/workbookRoute.js"
import subjectRouter from "../src/app/subject/subjectRoute.js"

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride());
app.use(cors());
app.use("/oauth", authRouter);
app.use("/question",queRouter);
app.use("/workbook",workbookRouter);
app.use("/subject",subjectRouter);
export default app;