const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Food = require('./models/foods');

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

app.get('/add_foods', (req, res) => {
  const food = new Food({
    name: 'Rice',
    img: 'http://res.cloudinary.com/ahumareze/image/upload/v1638211548/a5wrllvag4a12vrwkqmm.png',
    price: 300,
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