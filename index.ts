import express from 'express';
import path from 'path';
import dotenv from "dotenv";

import project from './routes/project';
import task from './routes/task';
import register from './routes/register';
import login from './routes/login';
import user from './routes/user';
import { authMiddleware } from './middleware/authMiddleware';

import { connectDb } from './config/database';


dotenv.config();

connectDb();


const app = express();
const PORT: number = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req: any, res: any) => {
    res.render('index');
});


app.use('/projects', authMiddleware, project);
app.use('/tasks', authMiddleware, task);
app.use('/me', user);

app.use('/register', register);
app.use('/login', login);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));