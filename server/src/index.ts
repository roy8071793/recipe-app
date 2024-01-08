import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

mongoose.set('strictQuery', true)
mongoose
.connect(`${process.env.DB_URI}`)
.then(() => console.log('Connected to DB'))
.catch(error => {
    console.log('DB connection error', error)
    process.exit(1)
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
