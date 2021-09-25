const express = require('express');
const { readFile, writeFile } = require('fs');
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.get('/api', (req, res) => {
  res.send(readFile('./editor.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(data);
  }))
})

app.put('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});