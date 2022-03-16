// const { ethers } = require("ethers");
const path = require('path');

 const { Wallet, ethers } = require("ethers");
// const { ethers } = require("hardhat")
const fs = require('fs');



async function call1() {
    console.log('calling');
    const contractAddress = "0x02648033E0Ece19cA899d807e0164Ccc062ca627"
    const contractName = "SimpleStorage"
    console.log('connecting to:',contractName);
    const contract = await ethers.getContractAt(contractName,contractAddress)
    
    let value = await contract.getValue()
    console.log(value)
}



async function call2() {
    console.log('calling');
    const contractAddress = "0x7e84289dbee4a9a89be80efc102525761eea7e8c7511a0bc8b88a0a372e6d659"
    const contractName = "NFT"
    console.log('connecting to:',contractName);
    const contract = await ethers.getContractAt(contractName,
        contractAddress)
    console.log(ethers.Signer.name)
    console.log(await contract.signer.getFeeData())
    return 
    // console.log(contract.);
    

    let rec = '0xBB444eC55D6A0561fFc9bf4F07B8d3bB3fac346D'
    let metaURL = 'http://localhost:8080/'
    try {
        // let value = await contract.mintNFT(rec, metaURL)
        let value = await contract.callme()
        console.log(value)
    }
    catch (err) {
        // console.log('error');
        console.log(err.message);
    }
    
}

async function call2test() {
    ethers.get
    console.log('calling');
    var url = 'HTTP://127.0.0.1:7545';
    var provider = new ethers.providers.JsonRpcProvider(url);
    const w = new Wallet('0xbDEBf7768E3118C9FF51756f7122323377527890',provider)
    const contract = await ethers.getContractFactory('SimpleStorage')
    const myContract = new ethers.Contract(contract, contract.interface,w);
    // console.log(myContract.interface);
    try {
    var value = await myContract.getValue()
        console.log(myContract.interface.functions);
    }
    catch (err) {
        console.log(err.message);
    }
    // console.log(value);
}

async function callSimpleStorage() {
    let contractAddress = "0x02648033E0Ece19cA899d807e0164Ccc062ca627"
    
    
    let abiPath = path.resolve(__dirname,'../artifacts/contracts/simpleStoreage.sol/SimpleStorage.json')
    
    
    let abi = JSON.parse(fs.readFileSync(abiPath)).abi
    

    var url = 'HTTP://127.0.0.1:7545';
    var provider = new ethers.providers.JsonRpcProvider(url);
    
    let w = new Wallet('f52e12827e44265ba589b6a54f006336292b19135658fb775b9935d1c7389aa3',provider)
    let contract = await new ethers.Contract(contractAddress, abi, w)._deployed()
    console.log('contract address:', contract.address)
    // let contract = await contract.deployed()
    let cc = await contract.setValue('GG')
    console.log(cc);
    // console.log(await contract.getValue());
    // let value = await contract.getValue()
    
    // console.log(value);

    
}




async function callNFT() {
    let contractAddress = "0xf80f6a0339BB0b0A05Cd900451ab1e4A0ee140dB"
    
    
    let abiPath = path.resolve(__dirname,'../artifacts/contracts/NFT.sol/appNFT.json')
    
    
    let abi = JSON.parse(fs.readFileSync(abiPath)).abi
    

    var url = 'HTTP://127.0.0.1:7545';
    var provider = new ethers.providers.JsonRpcProvider(url);
    
    let w = new Wallet('fdbf8e6392d8c605c6e10444b8b3213cc92507ebd6afcb4f013439a3bc5e029b',provider)
    let contract = await new ethers.Contract(contractAddress, abi,w)._deployed()
    console.log('contract address:', contract.address)
    
    let rec = '0x383C17D997799905F9A7A861Bec6Cb290Cd9754d'
    let tokenUri = 'http://localhost:8080/'
    let cc = await contract.mintNFT(rec,tokenUri)
    console.log(cc);
}


async function test() {
    let contractAddress = "0xf80f6a0339BB0b0A05Cd900451ab1e4A0ee140dB"
    
    
    let abiPath = path.resolve(__dirname,'../artifacts/contracts/NFT.sol/appNFT.json')
    
    
    let abi = JSON.parse(fs.readFileSync(abiPath)).abi
    

    var url = 'HTTP://127.0.0.1:7545';
    var provider = new ethers.providers.JsonRpcProvider(url);
    
    let w = new Wallet('fdbf8e6392d8c605c6e10444b8b3213cc92507ebd6afcb4f013439a3bc5e029b',provider)
    let contract = await new ethers.Contract(contractAddress, abi,w)._deployed()
    console.log('contract address:', contract.address)
    
    let rec = '0x383C17D997799905F9A7A861Bec6Cb290Cd9754d'
    let tokenUri = 'http://localhost:8080/'
    let cc = await contract.mintNFT(rec,tokenUri)
    
    console.log(cc);
}
test()