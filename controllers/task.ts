import {Request, Response} from 'express';

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

const getTasks = (req: Request, res: Response) => {
    res.status(200).json(TASKS);
};

export default getTasks;