import express from "express";
import router from "./routes/blogRoutes";


const app = express();
app.use(express.json()) // middleware to parse req.body

app.use("/api/", router)

export default app;