const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const sendMessage = require('./routers/send-message');
const login = require('./routers/login');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/send-message', sendMessage);
app.use('/chat/login', login);

app.listen(port, () => {
 console.log(`running on ${port}`);
});
