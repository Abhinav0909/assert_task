const express =require('express');
const router = express();
const Task = require("../model/model");
const {addTask,listTasks,updateTask,deleteTask,updateStatus} = require('../controller/task');
router.post("/",addTask);
router.get("/",listTasks);
router.patch("/:id",updateTask);
router.delete("/:id",deleteTask);
router.patch("/status/:id",updateStatus)
module.exports = router;