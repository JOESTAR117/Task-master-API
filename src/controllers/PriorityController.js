import tasks from '../models/TaskData';

const readme = async (req, res) => {
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

export default readme;
