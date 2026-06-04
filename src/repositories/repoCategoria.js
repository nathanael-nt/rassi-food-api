import {execute} from "../database/sqlite.js";

async function Listar() {

    const sql = "SELECT * FROM CATEGORIA ORDER BY ORDEM";
    const categorias = await execute(sql, []);

    return categorias;
}

export default { Listar };