const express = require('express');
const {connection} = require('../connection');
const router = express.Router();
require('dotenv').config();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.get('/getAllUsers', async (req, res)=>{
    try{
        var dbconnection = await connection();
        var query = 'SELECT * FROM usuarios';
        const results = await dbconnection.execute(query);
        return res.status(200).json(results.rows);
    }catch(err){
        console.error('Error:', err);
    } finally{
        if(dbconnection){
            try{
                await dbconnection.close();
                console.log('Connection closed')
            }catch(err){
                console.error('Error closing connection: ', err);
            }
        }
    }
})
  
module.exports = router;