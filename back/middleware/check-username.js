let { clientNames } = require('../model/chatInfo');

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
 } catch (err) {
  res.status(400).send(err.messagae);
 }
}

module.exports = checkUsername