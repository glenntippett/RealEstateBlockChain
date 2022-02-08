const User = require('./user');

class Seller extends User {
  constructor(fullName) {
    super(fullName);
    this.permitApplicationId = '';
  }

  set permitApplicationId(id) {
    this._permitApplicationId = id;
  }

  get permitApplicationId() {
    return this._permitApplicationId || 'No permit application id';
  }
}

module.exports = Seller;
