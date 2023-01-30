import express from 'express';
import connectDatabase from './database/db.js';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import cors from 'cors';

dotenv.config();

const app = express();

connectDatabase();

app.use(cors())
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
