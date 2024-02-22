const skills = [
    {id: 125223, skill: 'refactoring', proficiency: 'intermediate'},
    {id: 127904, skill: 'design', proficiency: 'intermediate'},
    {id: 139608, skill: 'debugging', proficiency: 'intermediate'}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }