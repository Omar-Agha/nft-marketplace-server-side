const { Wallet, ethers } = require("ethers");
const { response } = require("express");
const { request } = require("express");
const { getProvider } = require("../ehtereum-core/ether_connection");



/**
 * @param {request} req The date
 * @param {response} res The string
 */
exports.getWalletInfo = async function (req, res) {
    console.log('getWalletInfo');
    let private_key = req.body.private_key
    const provider = getProvider(req.body.net_type)
    let wallet = new Wallet(private_key, provider)
    let balance = ethers.utils.formatEther(await wallet.getBalance())
    let publicAddress = await wallet.getAddress()
    
    return res.json({
        "private_key": private_key,
        "public_address": publicAddress,
        "balance": balance
    });
}

/**
 * @param {request} req The date
 * @param {response} res The string
 */
exports.createNewWallet = async function (req, res) {
    const provider = getProvider
    let newWallet = Wallet.createRandom()
    return res.json({
        private_key: newWallet.privateKey,        
        public_key: newWallet.publicKey,
        address:newWallet.address
    })
}