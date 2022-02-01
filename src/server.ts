import express from 'express';

const app = express();
const port = process.env.port || 5000;

app.get('/', (request, response) => {
  response.send('Initial setup');
});

app.listen(port);