import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM PEDIDO_ITEM";
    const pedidoItens = await execute(sql, []);

    return pedidoItens;
}

export default { Listar };