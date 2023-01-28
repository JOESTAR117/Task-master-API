import tasks from '../models/TaskData.js';

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    const task = await tasks.findOne({ _id: id });

    if (notes) {
      task.notes = notes;

      await task.save();
    }

    return res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default updateTask;
