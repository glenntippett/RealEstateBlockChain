const User = require('./user');

class Authority extends User {
  constructor(fullName) {
    super(fullName);
  } 
}

module.exports = Authority;
