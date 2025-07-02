const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');


router.get('/', produtosController.mostrarProdutos)
router.post('/', produtosController.criarProduto)
router.post('/:id', produtosController.atualizarProduto);
router.delete('/:id', produtosController.deletarProduto);

module.exports = router;
