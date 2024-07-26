import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/mern-stack');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to DB.'));

app.use(cors());
app.use(express.json());
app.use(UserRoute)

app.listen(5000, () => console.log('Server running on port 5000.'));