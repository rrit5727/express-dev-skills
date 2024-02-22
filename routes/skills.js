var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills')

/* All actual paths begin with '/skills' */

//GET /skills
router.get('/', skillsController.index);
router.get('/:id', skillsController.show);

module.exports = router;
