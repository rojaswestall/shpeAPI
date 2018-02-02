import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';

dotenv.config();

import auth from './routes/auth';

const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log('Running on localhost: 8080'));

// 'for password 12345' for testing:
// '$2a$10$W5XGek9CPMk.8i0nPj9Qh.JZJtPFmYpzs83n.TUZiFinEdv21xT3a'
