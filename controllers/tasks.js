const TASKS = [
    {
        id: 1,
        name: 'Gova'
    },
    {
        id: 2,
        name: 'Tél'
    }
];

const getTasks = (req, res) => {
    res.status(200).json(TASKS);
};

module.exports = getTasks;