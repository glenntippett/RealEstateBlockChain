const Block = require('./block');
const Seller = require('./users/seller');
const PermitApplication = require('./permitApplication');
const BlockChain = require('./blockchain');
const readline = require('readline');

// Create the blockchain
const blockchain = new BlockChain();

function showMenu() {
  console.log('');
  console.log('Enter number or Q to cancel:');
  console.log('1. Seller');
  console.log('2. Buyer');
  console.log('3. Bank');
  console.log('4. Approve Application');
  console.log('5. Deny Application');
  console.log('B. Show me the BlockChain');
  console.log('Q. Exit');
}

function routeAction(answer) {
  process.stdout.write('\033c');
  switch(answer.toLowerCase()) {
    case '1':
      seller();
      break;
    case '2':
      console.log('buyer');
      break;
    case '3':
      console.log('bank');
      break;
    case '4':
      approveApplication();
      break;
    case '5':
      denyApplication();
      break;
    case 'b':
      viewBlockChain();
      break;
    case 'q':
      console.log('Closing...');
      break;
    default:
      console.log('Try again...')
  }
}

function waitForUserInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  rl.question('> ', (answer) => {
    routeAction(answer);
    if (answer.toLowerCase() === 'q') {
      rl.close();
    } else {
      main();
    }
  });
}

function main() {
  showMenu();
  waitForUserInput();
}

function viewBlockChain() {
  console.log(blockchain.chain);
}

function seller() {  
  console.log('Creating permit application...');
  const seller = new Seller('Seller');
  const permitApplication = new PermitApplication(
    '123 Fake Street',
    'Mr Owner',
    'buildingdesign.pdf',
    '12345'
  );
  blockchain.addToChain(permitApplication);
  const permitApplicationId = permitApplication.generatePermitApplicationId();
  seller.permitApplicationId = permitApplicationId;
  console.log('Permit application created!');
}

function approveApplication() {
  console.log('Approving application...');
}

function denyApplication() {
  console.log('Denying application...')
}

main();
