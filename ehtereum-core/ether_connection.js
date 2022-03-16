var ethers = require('ethers'); 
exports.getProvider = function(net_type) {
    if (net_type == 0) {//ganache network
        var url = 'HTTP://127.0.0.1:7545';
        var provider = new ethers.providers.JsonRpcProvider(url);
        
        
        return provider
    }
}
