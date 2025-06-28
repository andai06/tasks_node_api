const express = require('express');
const path = require('path');
const tasks = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
console.log(__dirname);
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});
app.use('/tasks', tasks);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));