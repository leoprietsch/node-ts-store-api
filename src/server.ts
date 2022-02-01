import express from 'express';

const app = express();
const port = process.env.port || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Initial setup');
});

app.listen(port);