const uniqId = require('uniqid');

class PermitApplication {
  constructor(propertyAddress, ownerDetails, buildingDesign, sellerLicenceNumber) {
    this.id = uniqId();
    this.propertyAddress = propertyAddress;
    this.ownerDetails = ownerDetails;
    this.buildingDesign = buildingDesign;
    this.sellerLicenceNumber = sellerLicenceNumber;
    this.approved = false;
  }

  set approved(approved) {
    this._approved = approved;
  }

  get approved() {
    return this._approved;
  }

  generatePermitApplicationId() {
    return uniqId();
  }
}

module.exports = PermitApplication;
