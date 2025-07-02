const produtosService = require("../services/produtosService")


exports.mostrarProdutos = async (req, res) => {
    try{
        const produtos = await produtosService.mostrar()

        const produtosFormatados = produtos.map(produtos  => {
            return {
                ...produtos.toObject(),
                id: produtos._id,
                _id: undefined
            }
        })

        res.status(200).json(produtosFormatados)
    } catch (erro){
        res.status(500).json({erro: "Erro ao mostrar produtos", detalhes: erro.message})
    }
}  

exports.criarProduto = async (req, res) => {
    try{
        const {nome, categoria, preco} = req.body
        const novoProduto = await produtosService.criar(nome, categoria, preco)
        res.status(201).json(novoProduto)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarProduto = async (req, res) => {
    try{
        const {nome, categoria, preco} = req.body
        const id = req.params.id   
        const novoProduto = await produtosService.atualizar(id, nome, categoria, preco)
        res.status(201).json(novoProduto)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarProduto = async (req, res) => {
    try{
        const id = req.params.id
        await produtosService.deletar(id)
        res.status(201).json("Produto removido!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.buscarProduto = async (req, res) => {
    try{
        const response = await produtosService.buscar(req.query)
        res.status(200).json(response)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}