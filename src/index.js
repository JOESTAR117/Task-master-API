import express from 'express';
import connectDatabase from './database/db';
import dotenv from 'dotenv';




dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    name: 'Jackson Rios',
    age: '19',
  });
});

connectDatabase();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
