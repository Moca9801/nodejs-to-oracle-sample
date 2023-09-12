const oracledb = require('oracledb');
require('dotenv').config();
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.initOracleClient({libDir: 'C:\\app\\aimc9\\instantclient_21_11'});

const dbConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTSTRING,
}

async function connection(){
    try{
        const connectToOracle = await oracledb.getConnection(dbConfig);
        console.log('Connected to Oracle');
        return connectToOracle;
    }catch(err){
        console.log('Error connecting to Oracle: ', err);
        throw err;
    }
}

connection();

module.exports = {connection};