import express from 'express'
import data from './data.json'
const app = express()
app.use(express.json())
var cors = require('cors')

app.use(cors())

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get('/coordinates', (_req, res) => {
  res.send(data)
})