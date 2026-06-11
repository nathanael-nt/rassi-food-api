import {execute} from "../database/sqlite.js";

async function Listar() {

    const sql = "SELECT * FROM BANNER ORDER BY ORDEM";
    const banners = await execute(sql, []);

    return banners;
}

export default { Listar };