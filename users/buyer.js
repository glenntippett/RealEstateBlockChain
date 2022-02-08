const User = require('./user');

class Buyer extends User {
  constructor(fullName) {
    super(fullName);
  } 
}

module.exports = Buyer;
