const mongoose = require('mongoose');

const Produto = mongoose.model('Produto', {
    nome: String,
    categoria: String,
    preco: String
})

module.exports = Produto