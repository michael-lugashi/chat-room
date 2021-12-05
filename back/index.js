const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
// const login = require('./routers/login')
// const messages = require('./model/messages')
// const users = require('./model/users')
// const recieveMessage = require('./routers/recieve-message')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let clientId = 0;
let clients = {};
let actUserName = '';
let clientNames = {};
const messageHistory = [];
console.log(clientNames);
console.log(clients);

let sendText = (text, showUserName = true) => {
 console.log(text);
 console.log(clientNames);
//  let data = '';
 let date = new Date();
 let timestamp = `[${date.getHours()}:${date.getMinutes()}]`;
 if (showUserName) {
  messageHistory.push(`${timestamp} <${actUserName}> ${text}`);
  //    data = `data: ${timestamp} <${actUserName}> ${text}\n\n`;
 } else {
  messageHistory.push(`${timestamp} ${text}`);
  //    data = `data: ${timestamp} ${text}\n\n`;
 }
 const data = `data: ${JSON.stringify(messageHistory)}\n\n`;
 for (const clientId in clients) {
  clients[clientId].write(data);
 }
};

app.get('/chat/login/:name', (req, res) => {
 res.writeHead(200, {
  'Content-Type': 'text/event-stream',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
 });
//  console.log(clientId);j
const myClientId = clientId
 clients[myClientId] = res;
 clientNames[myClientId] = req.params.name;

 req.on('close', () => {
  delete clients[myClientId];
  actUserName = '';
  console.log(myClientId)
  console.log(myClientId)
  sendText(clientNames[myClientId] + ' disconnected!', false);
  delete clientNames[myClientId];
 });
 ++clientId;

 sendText(req.params.name + ' connected!', false);

 let allMates = '';
 for (const cliId in clientNames) {
  allMates += `${clientNames[cliId]}`;
  if (cliId < clientId) allMates += ' ';
 }

 sendText(`logged in [${allMates}]`, false);
});

app.post('/send-message', (req, res) => {
 actUserName = req.body.username;
 if (!actUserName) {
  res.json({ success: false });
  return;
 }

 sendText(req.body.text);
 res.json({ success: true, text: req.body.text });
});
// app.use('send-message', recieveMessage)
// app.use('/login', login)

// app.get("/", (req, res) => {
//     console.log('sent')
//   res.send("hello");
// });

app.listen(port, () => {
 console.log(`running on ${port}`);
});
