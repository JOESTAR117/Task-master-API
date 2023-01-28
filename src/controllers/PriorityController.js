import tasks from '../models/TaskData';

const readmeTask = async (req, res) => {
  try {
    const priority = req.query;

    const priorityNotes = await tasks.find(priority);

    if (priorityNotes.length === 0) {
      res.status(404).json('there are no tasks set as a priority');
    }

    return res.json(priorityNotes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await tasks.findOne({ _id: id });

    if (task.priority) {
      task.priority = false;
    } else {
      task.priority = true;
    }

    await task.save();

    return res.status(200).send(task)

  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { readmeTask, updateTask };
