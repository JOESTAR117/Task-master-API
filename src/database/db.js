import mongoose from 'mongoose';

const connectDatabase = async () => {
  console.log('Wait for database connection');

  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB atlas Connected'))
    .catch((error) => console.error(error.message));
};

export default connectDatabase;
