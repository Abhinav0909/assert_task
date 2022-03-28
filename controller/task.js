const { send } = require("express/lib/response");
const Task = require("../model/model");
exports.addTask = async(req,res)=> {
    try {
        if(req.body.isCompleted){
            req.body.isCompleted = false;
        }
        console.log(req.body);
        const task = await new Task(req.body).save();
        res.status(201).send(task);
    } catch (error) {
        console.info(error)
       res.status(400).send(error); 
    }
}
exports.listTasks = async(req,res) =>{
    try {
        const tasks = await Task.find({isCompleted: false});
        res.status(200).send(tasks);
    } catch (error) {
       res.status(400).send(error);
    }
};

exports.updateTask = async(req,res)=> {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {new:true}
        );
        res.satus(200).send(task);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(204).json({
            data: "Deleted"
        });
    } catch (error) {
       res.status(204);
    }
};
exports.updateStatus = async(req,res) => {
    try{
        const task = await Task.updateOne({$set:{isCompleted:true}});
        res.status(200).send(task);
    }
    catch(error){
        res.status(404);
    }
}