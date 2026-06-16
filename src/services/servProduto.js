import repositoryProduto from "../repositories/repoProduto.js";

async function Listar() {
    const produtos = await repositoryProduto.Listar();

    return produtos;
}

export default { Listar };