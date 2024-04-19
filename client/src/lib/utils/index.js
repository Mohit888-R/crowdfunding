// utils/ethers.js

import { ethers } from 'ethers';
import CrowdFunding from '../../../../web3/artifacts-zk/contracts/crowdfunding.sol/CrowdFunding.json';

// const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/2c772a6e6a884e49bbb3e76b658fd513');
let provider;
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    provider = new ethers.providers.Web3Provider(window.ethereum);
}
// await provider.send('eth_requestAccounts', []);
const contractAddress = '0x484Fa151601A3f24df2DF8B2d128CE2C2F76bdcD';
const contractABI = CrowdFunding.abi;

let signer;
if (provider) {
    signer = provider.getSigner();
}

let contract;
if (signer) {
    contract = new ethers.Contract(contractAddress, contractABI, signer);
}


export async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access if needed
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // Prompt user for account connections
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            console.log("Account:", await signer.getAddress());
            return signer.getAddress(); // Returns the connected account address
        } catch (error) {
            console.error("User denied account access or error occurred:", error);
        }
    } else {
        alert('Please install MetaMask!');
    }
}
export async function createCampaign(owner, title, description, target, deadline, amountCollected, image) {
    const tx = await contract.createCampaign(owner, title, description, target, deadline, amountCollected, image);
    await tx.wait();
}

export async function donateToCampaign(id, amount) {
    const overrides = {
        value: ethers.utils.parseEther(amount.toString())
    };
    const tx = await contract.donateToCampaign(id, overrides);
    await tx.wait();
}

export async function getCampaigns() {
    try {
        const numberOfCampaigns = await contract.numberOfCampaigns();
        const allCampaigns = [];

        for (let i = 0; i < numberOfCampaigns; i++) {
            const campaign = await contract.campaigns(i);
            allCampaigns.push(campaign);
        }

        return allCampaigns;
    } catch (error) {
        console.error('Error fetching campaigns:', error);
        return [];
    }
}