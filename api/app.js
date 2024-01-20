import express from "express"
import userRouter from "./routes/userRouter.js";
import CORS from "cors"
import fileUpload from "express-fileupload";

const app = express()

app.use(express.json());
app.use(CORS({
    origin: "http://localhost:5173"
}))
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))

app.use("/api/v1/users", userRouter);

export default app;