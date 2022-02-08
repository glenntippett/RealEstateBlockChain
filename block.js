const hash = require('crypto-js/sha256');
const uniqId = require('uniqid');

class Block {
  constructor(index, previousHash, timestamp, data) {
    this.id = uniqId();
    this.index = index;
    this.hash = this.calculateHash();
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }

  calculateHash() {
    return hash(this.id, this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;
