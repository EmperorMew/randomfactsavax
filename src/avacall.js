// Import the Avalanche.js library
import Avalanche from 'avalanche';

// List of facts about the wallet's history
const facts = [
  "This wallet was created on [date].",
  "The first transaction from this wallet was to [address] for [amount] AVAX.",
  "This wallet has made a total of [number] transactions.",
  "The largest transaction from this wallet was for [amount] AVAX.",
  "This wallet has received a total of [amount] AVAX from [number] different sources."
];

async function displayLoadingScreen() {
  // Connect to the Avalanche network
  const ava = await Avalanche.Avalanche.new({
    host: 'localhost',
    port: 9650,
    protocol: 'http'
  });

  // Get the wallet balance
  const balance = await ava.getAVAXBalance(walletAddress);

  // Get the wallet address
  const address = walletAddress;

  // Get the number of transactions made by or to the wallet
  const transactionCount = await ava.getTransactionCount(walletAddress, 'pending');

  // Get the transaction history for the wallet
  const transactions = await ava.getTransactions(walletAddress, 10, 0);

  // Select a random fact from the list
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Modify the fact to include actual data about the wallet
  const modifiedFact = fact
    .replace('[date]', transactions[0].timestamp)
    .replace('[address]', transactions[0].to)
    .replace('[amount]', transactions[0].value)
    .replace('[number]', transactionCount)
    .replace('[amount]', transactions.reduce((acc, t) => acc + t.value, 0))
    .replace('[number]', new Set(transactions.map(t => t.from)).size);

  // Display the modified fact on the loading screen
  console.log(`Loading...

Did you know? ${modifiedFact}`);
}

// Call the function to display the loading screen
displayLoadingScreen();
