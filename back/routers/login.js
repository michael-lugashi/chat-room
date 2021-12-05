const express = require('express');
const router = express.Router();

router.post('', (req, res)=>{
    if (!req.body.message) {
        res.status(400).send('Enter A Username!')
        return
    }
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
      });
      res.write('data: yoo')
      setInterval(()=>{
          res.write('data: hellos\n\n')
      }, 1000)
      
    // res.send('login')


})




module.exports = router