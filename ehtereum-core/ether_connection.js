var ethers = require('ethers'); 
module.exports = function (net_type) {
    if (net_type == 0) {//ganache network
        var url = 'HTTP://127.0.0.1:7545';
        var provider = new ethers.providers.JsonRpcProvider(url);
        return provider
    }
}
