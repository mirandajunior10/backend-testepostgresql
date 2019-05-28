require('dotenv/config');
const express = require('express');
const cors = require('cors');


app = express();

app.use(cors());

//root
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
  
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });

  //users
  app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
  });
  
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
  });
  
  app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
  });

app.listen(process.env.PORT, () =>
  console.log('Example app listening on port 3000!'),
);