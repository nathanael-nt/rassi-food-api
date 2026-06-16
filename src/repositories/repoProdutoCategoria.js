import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM PRODUTO_CATEGORIA";
    const produtoCategorias = await execute(sql, []);

    return produtoCategorias;
}

export default { Listar };