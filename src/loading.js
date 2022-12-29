// List of facts about the Avalanche blockchain
const facts = [
    "Avalanche is a decentralized platform for building and deploying distributed applications.",
    "Avalanche uses a unique consensus mechanism called Avalanche Consensus, which allows for fast and secure transactions.",
    "Avalanche supports multiple virtual machines, including Ethereum's EVM, allowing developers to build and deploy a variety of applications.",
    "Avalanche is highly scalable, with the ability to process over 4,500 transactions per second.",
    "Avalanche has a low transaction fee, making it a cost-effective platform for building and deploying applications.",
    "Avalanche is backed by a strong team of experienced blockchain developers and researchers."
];

// Select a random fact from the list
const fact = facts[Math.floor(Math.random() * facts.length)];

// Display the random fact on the loading screen
console.log("Loading...\n\nDid you know? " + fact);
