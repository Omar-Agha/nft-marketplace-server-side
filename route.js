const express = require('express');
const app = express();

//importing example
const test = require('./ehtereum-core/for_test');
//importing example

// Route handling

//simple API example
app.get('/', (req, res) => {
    
    // return res.json({
    //     'API': 'this is api',
    //     'data1': 'some data',
    //     'data2':'some data'
    // })

    const ether_connection = require('./ehtereum-core/ether_connection');
    return res.json(ether_connection(0))
});
  
// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
