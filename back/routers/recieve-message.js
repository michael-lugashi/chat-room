const express = require('express');
const router = express.Router();
const messages = require('../model/messages')

router.post('', (req, res)=>{
    if (!req.body.message) {
        res.status(400).send('Enter A message!')
        return
    }
    messages.push(req.body.message)
      
    // res.send('login')


})




module.exports = router