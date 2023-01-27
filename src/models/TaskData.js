import mongoose from 'mongoose';

const TaskDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  priority: {
    type: Boolean,
  },
});

const Tasks = mongoose.model('Task', TaskDataSchema);

export default Tasks;
