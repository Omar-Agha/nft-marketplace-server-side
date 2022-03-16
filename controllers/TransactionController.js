const { Wallet, ethers } = require("ethers");
const ether_connection = require("../ehtereum-core/ether_connection");
const { getProvider } = require("../ehtereum-core/ether_connection");





/**
 * @param {request} req The date
 * @param {response} res The string
 */
exports.sendTransaction= async function (req, res) {
    console.log('sendTransaction');
    const net_type = req.body.net_type
    let provider = getProvider(net_type)
    let wallet = new Wallet(req.body.from)
    
    let signer = wallet.connect(provider)
    let from = wallet.address
    let to = req.body.to
    let gasPrice = await provider.getGasPrice()
    
    const tx = {
        from: from,
        to: to,
        value: ethers.utils.parseUnits("2", "ether"),
        gasPrice: gasPrice,
        gasLimit: ethers.utils.hexlify(100000),
        nonce: provider.getTransactionCount(wallet.address, 'latest')
    }

    
    try {    
        let transaction = await signer.sendTransaction(tx)
        return res.json(
        transaction
        )
        
    }
    catch (err) {
        console.log(err);
        return res.json(err.message)
    }
}