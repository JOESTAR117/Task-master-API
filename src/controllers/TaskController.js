import tasks from '../models/TaskData';

const allTask = async (req, res) => {
  try {
    const tasklist = await tasks.find();

    return res.json(tasklist);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, notes, priority } = req.body;

    if (!title || !notes || !priority) {
      res
        .status(400)
        .send({ message: 'Submit all fields for task registration' });
    }

    const taskCreated = await tasks.create({
      title,
      notes,
      priority,
    });

    return res.json(taskCreated);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const taskDelete = await tasks.findOneAndDelete({ _id: id });

    if (taskDelete) {
      return res.status(200).send(taskDelete);
    }

    return res.status(401).json('this task was not found');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { allTask, createTask, deleteTask };
