const express = require('express');
const connection = require('../connection');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
require('dotenv').config();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole')

router.get('/filter', (req, res)=>{
    
})

router.get('/filter', checkRole.checkRole, auth.authenticateToken, (req, res)=>{
    var query = "SELECT * FROM users where role='user'";
    connection.query(query, (err, results)=>{
        if(!err){
            return res.status(200).json(results)
        }else{
            return res.status(500).json(err)
        }
    })
});

router.get('/checkToken', (req, res) => {
   return res.status(200).json( { message: 'true' })
}); 

  
module.exports = router;