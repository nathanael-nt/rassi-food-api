import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM USUARIO";
    const usuarios = await execute(sql, []);

    return usuarios;
}

export default { Listar };