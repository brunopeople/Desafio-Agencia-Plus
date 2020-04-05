const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');
config = require('./DB');

const productRoute = require('./routes/product.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Banco de dados conectados') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/products', productRoute);
const port = process.env.PORT || 4000;

const server = app.listen(function () {
  console.log('Escutando na porta' + port);
});