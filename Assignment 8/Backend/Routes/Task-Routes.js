import express from "express";

import { GetAllTask, GetTaskId, PostTask, PatchTask, DelTask } from "../Controller/Task-Controller.js"
const route = express.Router();

route.get("/", GetAllTask)

route.post("/",PostTask)

route.get("/:id",GetTaskId)



route.patch("/:id",PatchTask)

route.delete("/:id",DelTask)

export default route;