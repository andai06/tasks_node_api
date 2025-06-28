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

const getProjects = (req: any, res: any) => {
    res.status(200).send(PROJECTS);
};

export default getProjects;