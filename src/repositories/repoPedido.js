import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM PEDIDO";
    const pedidos = await execute(sql, []);

    return pedidos;
}

export default { Listar };