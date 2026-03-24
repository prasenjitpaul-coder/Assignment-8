import express from "express";
import dotenv from "dotenv";
import route from "./Routes/Task-Routes.js";
import ConnectDB from "./config/DB.js";
import cors from "cors";
dotenv.config();
// ConnectDB();
const app = express();


app.use(cors({
  origin: ["http://localhost:5173",
   "https://assignment8n.netlify.app"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));
//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log( req.method);
     if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
    // res.status(403).json({ message: "Access denied" });
    next();
})

///// 


app.options("/api/task/:id", cors());
/////
app.use("/api/task", route)

//server
app.listen(process.env.PORT, async() => {
    console.log(`Server id Running!!!!${process.env.PORT}`);
        await ConnectDB();
});