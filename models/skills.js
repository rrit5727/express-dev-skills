const skills = [
    {id: 125223, skill: 'refactoring', proficiency: 'intermediate'},
    {id: 127904, skill: 'design', proficiency: 'intermediate'},
    {id: 139608, skill: 'debugging', proficiency: 'intermediate'}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
	
  function getAll() {
    return skills;
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(function(skill) {
      return skill.id === id
    });

  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.proficiency = 'Beginner';
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(function(skill){
      return skill.id === id
    }); 
    skills.splice(idx, 1)
    
  }