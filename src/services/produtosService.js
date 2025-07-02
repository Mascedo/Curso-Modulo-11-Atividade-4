const produtosRepository = require("../repositories/produtosRepository")

class produtosService{

    async mostrar(){
        return await produtosRepository.mostrar()
    }

    async criar(nome, categoria, preco){
        if(!(nome&&categoria&&preco)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novoProduto = ({nome, categoria, preco})

        return await produtosRepository.criar(novoProduto)
    }

    async atualizar(id, nome, categoria, preco){
        if(!(id&&nome&&categoria&&preco)){
            throw new Error("Todos os campos são necessarios!")
        }

        const dadosAtualizados = ({nome, categoria, preco})

        return await produtosRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await produtosRepository.deletar(id)
    }
}

module.exports = new produtosService()