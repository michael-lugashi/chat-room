const express = require('express');
const router = express.Router();
const sendText = require('../updating-front-functions/send-text');

router.post('', (req, res) => {
 if (!req.body.username) {
  res.json({ success: false });
  return;
 }

 sendText(req.body.text, req.body.username);
 res.json({ success: true, text: req.body.text });
});

module.exports = router;
