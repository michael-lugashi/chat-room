const express = require('express');
const router = express.Router();
const sendText = require('../updating-front-functions/send-text');

router.post('', (req, res) => {
 if (!req.body.username) {
  res.status(400).send('Need to be logged in to a user!');
  return;
 }
 sendText(req.body.text, req.body.username);
 res.json({ success: true });
});

module.exports = router;
