const uniqId = require('uniqid');

class User {
  constructor(fullName) {
    this.id = uniqId();
    this.fullName = fullName;
  } 

  getId() {
    return this.id;
  }

  getFullName() {
    return this.fullName;
  }
}

module.exports = User;
