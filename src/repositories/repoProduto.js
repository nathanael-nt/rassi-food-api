import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM PRODUTO";
    const produtos = await execute(sql, []);

    return produtos;
}

export default { Listar };