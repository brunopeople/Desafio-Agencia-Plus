// product.route.js
const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../models/Product');

// Define a rota loja
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({ 'Produto: O Produto foi adicionado com sucesso' });
    })
    .catch(err => {
      res.status(400).send("não foi possível ");
    });
});

// Defined a listagem do produtos criados(get, list)
productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defina a edição de rotas
productRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product) {
    res.json(product);
  });
});

//  Defina a rota de atualização 
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      res.status(404).send("Registro não encontrado!!");
    else {
      product.ProductName = req.body.ProductName;
      product.ProductDescription = req.body.ProductDescription;
      product.ProductPrice = req.body.ProductPrice;

      product.save().then(product => {
        res.json('Atualização registrada!');
      })
        .catch(err => {
          res.status(400).send("Não pode registrar a atualização pelo banco de dados");
        });
    }
  });
});

// Defined delete | remove | destroy route
productRoutes.route('/delete/:id').get(function (req, res) {
  Product.findByIdAndRemove({ _id: req.params.id }, function (err, product) {
    if (err) res.json(err);
    else res.json('Remoção feita com sucesso!!');
  });
});

module.exports = productRoutes;
