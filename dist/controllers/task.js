"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TASKS = [
    {
        id: 1,
        name: 'Govass'
    },
    {
        id: 2,
        name: 'Tél'
    }
];
const getTasks = (req, res) => {
    res.status(200).json(TASKS);
};
exports.default = getTasks;
//# sourceMappingURL=task.js.map