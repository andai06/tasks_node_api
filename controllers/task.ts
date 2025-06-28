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

const getTasks = (req: any, res: any) => {
    res.status(200).json(TASKS);
};

export default getTasks;