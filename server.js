const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb://localhost:27017/node-api', 
  { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');
app.post('/api/teste', (req, res) => {
  const product = Product.create({
    title: 'Titulo5',
    description: 'Decricao da Outra Outra Coisa',
    url: 'http://www.testao.com'
  });
  return res.send('Ola Mundo');
});


app.use('/api', require('./src/routes'));
app.listen(3001);