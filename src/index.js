const express = require("express");
const bodyParser  = require('body-parser');

const apiRoutes = require('./routes/index');

const {PORT , SYNC_DB} = require('./config/serverConfig');

const db = require('./models/index');

const sequelize = require('sequelize');

const setupAndStartServer = async function (){
    // create the express object

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

app.use('/api' , apiRoutes)

app.listen(PORT , async function (){

console.log(`Server started at PORT ${PORT}`);



  if(SYNC_DB == 'true'){
    await db.sequelize.sync({alter:true})
  }

})


}

setupAndStartServer();