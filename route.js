const express = require('express');
const app = express();
const bp = require('body-parser');
const walletController = require('./controllers/WalletController');
const TransactionController = require('./controllers/TransactionController');



app.use(bp.json())
app.use(bp.urlencoded({extended:true}))




app.get('/', (req, res) => {    
    res.json({ message: "Hello NFT World" })
});


//get account Info
app.get('/walletInfo', walletController.getWalletInfo)




//send transaction
app.post('/sendTransaction', TransactionController.sendTransaction)


//create new random wallet
app.get('/createWallet', walletController.createNewWallet)





// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
    
});
