import Task from "../Model/Task-Model.js";

export const GetSearch = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.json([]);
    const results = await Task.find({
      task: { $regex: query, $options: "i" },
    });
    res.json(results);
  } catch (err) {
    console.error(err); 
    res.status(500).json([]);
  }
};

export const GetAllTask = async (req, res) => {
  try {
    const AllTask = await Task.find().sort({ createAt: -1 });
    if (AllTask === 0) {
      return res.status(404).json({
        message: "No Task",
      });
    }
    res.status(200).json(AllTask);
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

export const GetTaskId = async (req, res) => {
  try {
    const { id } = req.params;
    const OneTask = await Task.findById(id);
    if (!OneTask) {
      return res.status(404).json({
        message: "No Task With id",
      });
    }
    res.status(200).json({ OneTask });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

export const PostTask = async (req, res) => {
  try {
    const TaskCreated = await Task.create(req.body);

    res.status(201).json({ TaskCreated });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};
export const PatchTask = async (req, res) => {
  try {
    const { id } = req.params;
    const UpdateTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!UpdateTask) {
      return res.status(404).json({
        message: "No Task with Id For update",
      });
    }
    res.status(200).json({ UpdateTask });
  } catch (error) {
    res.status(500).json({
      Error: error.message,
    });
  }
};

export const DelTask = async (req, res) => {
  try {
    const { id } = req.params;
    const DeleteTask = await Task.findByIdAndDelete(id);
    if (!DeleteTask) {
      return res.status(404).json({ message: "No task With Id to Delete" });
    }
    res.status(200).json({ DeleteTask });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};
