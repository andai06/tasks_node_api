"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1 = {
    id: 1,
    title: 'Task 1',
    description: 'Task 1 description',
    priority: 1,
    end_date: new Date(),
    status: 'TODO'
};
const PROJECTS = [
    {
        id: 1,
        title: 'Projet 1',
        description: 'hjdd djdd jddid idi',
        creation_date: new Date(),
        tasks: [task1]
    }
];
const getProjects = (req, res) => {
    res.status(200).send(PROJECTS);
};
exports.default = getProjects;
//# sourceMappingURL=project.js.map