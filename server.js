const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Food = require('./models/foods');
const Order = require('./models/orders');

const PORT = process.env.PORT || 5000;

//express app
const app = express();

//conect to mongodb
const dbURI = 'mongodb+srv://panda_developer:de51gner@panda.igjqr.mongodb.net/dr-food?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((r) => {app.listen(PORT), console.log('connected')})
  .catch((e) => console.log('error connecting to db' + e))

app.use(express.json());
app.use(cors());

app.post('/add_foods', (req, res) => {
  const food = new Food({
    name: req.body.name,
    img: req.body.img,
    price: req.body.price,
    description: req.body.description,
    quantity: 1
  })
  food.save()
    .then((r) => {
      res.send(r)
    })
    .catch((e) => {
      res.send()
    })
});

app.get('/foods', (req, res) => {
  Food.find()
    .then(r => {
      res.send(r)
    })
    .catch(e => {
      res.send(e)
    })
})

app.post('/selected_food', (req, res) => {
  Food.findById(req.body.id)
    .then(r => {
      res.send(r)
    })
    .catch(e => {
      res.send(e)
    })
});

app.post('/order', (req, res) => {
  res.send(req.body)
})