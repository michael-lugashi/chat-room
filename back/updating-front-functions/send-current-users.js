const { clients, clientNames } = require('../model/chatInfo');

const updateChatUsers = () => {
 const users = `event: userChange\ndata: ${JSON.stringify(clientNames)}\n\n`;
 for (const clientId in clients) {
  clients[clientId].write(users);
 }
};

module.exports = updateChatUsers;
