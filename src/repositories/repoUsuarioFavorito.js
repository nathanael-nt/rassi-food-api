import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM USUARIO_FAVORITO";
    const favoritos = await execute(sql, []);

    return favoritos;
}

export default { Listar };