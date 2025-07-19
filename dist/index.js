"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const project_1 = __importDefault(require("./routes/project"));
const task_1 = __importDefault(require("./routes/task"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set('view engine', 'pug');
console.log(__dirname);
app.set('views', path_1.default.join(__dirname, 'views'));
app.get('/', (req, res) => {
    console.log(req);
    res.render('index');
});
app.use('/projects', project_1.default);
app.use('/tasks', task_1.default);
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
//# sourceMappingURL=index.js.map