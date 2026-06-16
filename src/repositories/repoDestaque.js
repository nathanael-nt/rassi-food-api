import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM DESTAQUE";
    const destaques = await execute(sql, []);

    return destaques;
}

export default { Listar };