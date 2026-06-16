import servicePedidoItem from "../services/servPedidoItem.js";

async function Listar(req, res) {
    try {
        const pedidoItens = await servicePedidoItem.Listar();
        res.status(200).json(pedidoItens);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };