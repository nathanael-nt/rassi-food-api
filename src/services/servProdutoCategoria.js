import repositoryProdutoCategoria from "../repositories/repoProdutoCategoria.js";

async function Listar() {
    const produtoCategorias = await repositoryProdutoCategoria.Listar();

    return produtoCategorias;
}

export default { Listar };