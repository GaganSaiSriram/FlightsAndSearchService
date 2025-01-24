const express = require("express");
const bodyParser  = require('body-parser');

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async function (){
    // create the express object

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));
    
app.listen(PORT , function (){
    
    console.log(`Server started at PORT ${PORT}`);
})


}

setupAndStartServer();