// controllers/skills.js
const Skill = require('../models/skills')


module.exports = {
  index,
  show
}


function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }
  
function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  }


