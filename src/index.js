const express = require('express');
const produtosRoutes = require('./routes/produtosRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
const port = process.env.PORT

mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use('/produtos', produtosRoutes)

app.listen(port, () => {
    console.log("Aplicação rodando...")
})