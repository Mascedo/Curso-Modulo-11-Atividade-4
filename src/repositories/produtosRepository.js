const Produto = require('../models/produtosModel')


class produtoRepository {
    async mostrar(){
        return await Produto.find()
    }

    async criar(produto){
        return  await Produto.create(produto)
    }

    async atualizar(id, produto){
        return await Produto.findByIdAndUpdate(id, produto, {new:true})
    }

    async deletar(id){
        return await Produto.findByIdAndDelete(id)
    }

    }

module.exports = new produtoRepository();