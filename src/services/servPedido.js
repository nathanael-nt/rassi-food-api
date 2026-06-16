import repositoryPedido from "../repositories/repoPedido.js";

async function Listar() {
    const pedidos = await repositoryPedido.Listar();

    return pedidos;
}

export default { Listar };