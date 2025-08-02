import express from 'express';
import path from 'path';

import project from './routes/project';
import task from './routes/task';
import register from './routes/register';
import login from './routes/login';

const app = express();
const PORT: number = 3000;

app.set('view engine', 'pug');
console.log('dirname', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req: any, res: any) => {
    res.render('index');
});


app.use('/projects', project);
app.use('/tasks', task);
app.use('/register', register);
app.use('/login', login);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));