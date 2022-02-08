const Block = require('./block');

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "1", Date.parse('2019-01-01'), {name: 'Genesis Block'});
  }

  addToChain(newBlock) {  
    const previousBlock = this.getLatestBlock();
    const blockToAdd = new Block(
      previousBlock.index + 1, 
      previousBlock.hash, 
      Date.now(), 
      newBlock);
    this.chain.push(blockToAdd);
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

}

module.exports = BlockChain;
