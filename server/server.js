const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/client/build'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
//   res.status(200).json({message: 'hey'})
  res.sendFile(__dirname + '/client/build/index.html');
});

module.exports = app;
