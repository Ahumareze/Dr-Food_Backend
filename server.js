const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

//express app
const app = express();

//conect to mongodb
const dbURI = 'mongodb+srv://panda_developer:de51gner@panda.igjqr.mongodb.net/dr-food?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

app.get('/foods', (req, res) => {
    
})

app.listen(PORT);