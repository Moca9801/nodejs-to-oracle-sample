const oracledb = require('oracledb');
require('dotenv').config();

const dbConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTSTRING,
}

async function connection(){
    try{
        const connectToOracle = await oracledb.getConnection(dbConfig);
        console.log('Connected to Oracle');
    }catch(err){
        console.log('Error connecting to Oracle: ', err);
    }
}

module.exports = connection();