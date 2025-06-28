import express from 'express';
import path from 'path';
import project from './routes/project';
import task from './routes/task';

const app = express();
const PORT: number = 3000;

app.set('view engine', 'pug');
console.log(__dirname);
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: any, res: any) => {
    console.log(req);
    res.render('index');
});
app.use('/projects', project);
app.use('/tasks', task);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));