const { clients, messageHistory } = require('../model/chatInfo');

const sendText = (text, textUsername = null) => {
 const currentText = {
  sender: textUsername,
  text,
  timestamp: createTimestamp(),
 };

 messageHistory.push(currentText);

 const data = `data: ${JSON.stringify(messageHistory)}\n\n`;
 for (const clientId in clients) {
  clients[clientId].write(data);
 }
};

const createTimestamp = () => {
 const date = new Date();
 return `${date.getHours()}:${date.getMinutes()}`;
};

module.exports = sendText;
