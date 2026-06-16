import repositoryPedidoItem from "../repositories/repoPedidoItem.js";

async function Listar() {
    const pedidoItens = await repositoryPedidoItem.Listar();

    return pedidoItens;
}

export default { Listar };