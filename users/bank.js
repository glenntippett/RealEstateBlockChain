const User = require('./user');

class Bank extends User {
  constructor(fullName) {
    super(fullName);
  } 
}

module.exports = Bank;
