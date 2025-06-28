const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks');

router.get('/', taskController);

module.exports = router;