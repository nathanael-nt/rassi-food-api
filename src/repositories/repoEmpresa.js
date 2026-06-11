import {execute} from "../database/sqlite.js";

async function Listar() {

    const sql = "SELECT * FROM EMPRESA";
    const empresas = await execute(sql, []);

    return empresas;
}

export default { Listar };