const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  let team = ''; 
  const isLetter = (l) => l.toLowerCase() != l.toUpperCase();

  for (let member of members) {
    if (typeof(member) !== 'string') {
      continue;
    }

    const name = member.trimStart();
    if (name.length === 0) {
      continue;
    }

    if (isLetter(name[0])) {
      team += name[0].toUpperCase();
    }
  }

  return team.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
