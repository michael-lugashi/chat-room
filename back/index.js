const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    console.log('sent')
  res.send("hello");
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});