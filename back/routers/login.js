const express = require('express');
const router = express.Router();
let { clients, clientNames, clientId } = require('../model/chatInfo');
const sendText = require('../updating-front-functions/send-text');
const updateChatUsers = require('../updating-front-functions/send-current-users');
const { getNodeText } = require('@testing-library/react');

router.get('/:name', checkUsername, (req, res) => {
 res.writeHead(200, {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
 });

 const myClientId = clientId;
 clients[myClientId] = res;
 clientNames[myClientId] = req.params.name;

 req.on('close', () => {
  delete clients[myClientId];
  sendText(clientNames[myClientId] + ' disconnected!');
  delete clientNames[myClientId];
  updateChatUsers();
 });

 sendText(req.params.name + ' connected!');
 updateChatUsers();
 ++clientId;
});

module.exports = router;

function checkUsername(req, res, next) {
 try {
  const name = req.params.name;
  if (name.length < 3 || name.length > 10) {
   throw new Error('Username must be between 3 and 10 characters');
  }
  if (Object.values(clientNames).includes(name)) {
   throw new Error('Username already taken!');
  }
  next();
  console.log('middle');
 } catch (err) {
  res.status(400).send(err.messagae);
 }
}
