// Import the ERC20 contract and web3 library
import ERC20Contract from './ERC20Contract';
import web3 from 'web3';

async function displayLoadingScreen() {
  // Connect to the ERC20 contract
  const contract = new web3.eth.Contract(ERC20Contract.abi, ERC20Contract.address);

  // Get the contract balance
  const balance = await contract.methods.balanceOf(walletAddress).call();

  // Get the contract name
  const name = await contract.methods.name().call();

  // Get the contract symbol
  const symbol = await contract.methods.symbol().call();

  // Get the contract decimals
  const decimals = await contract.methods.decimals().call();

  // Display the contract information on the loading screen
  console.log(`Loading...

ERC20 Wallet Information:
  Balance: ${balance} ${symbol}
  Name: ${name}
  Symbol: ${symbol}
  Decimals: ${decimals}`);
}

// Call the function to display the loading screen
displayLoadingScreen();
