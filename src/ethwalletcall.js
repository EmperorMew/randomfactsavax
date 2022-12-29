// Import the ERC20 contract and web3 library
import ERC20Contract from './ERC20Contract';
import web3 from 'web3';

async function displayLoadingScreen() {
  // Connect to the ERC20 contract
  const contract = new web3.eth.Contract(ERC20Contract.abi, ERC20Contract.address);

  // Get the wallet balance
  const balance = await contract.methods.balanceOf(walletAddress).call();

  // Get the wallet address
  const address = walletAddress;

  // Display the wallet information on the loading screen
  console.log(`Loading...

ERC20 Wallet Information:
  Balance: ${balance} ${symbol}
  Address: ${address}`);
}

// Call the function to display the loading screen
displayLoadingScreen();
