import { execute } from "../database/sqlite.js";

async function Listar() {
    const sql = "SELECT * FROM USUARIO";
    const usuarios = await execute(sql, []);

    return usuarios;
}

async function Inserir( nome, email, senha, endereco, complemento, bairro, cidade, numero, uf, cep, telefone ) {

    const sql = `insert into usuario(nome, email, senha, endereco, complemento, bairro, cidade, 
                 numero, uf, cep, telefone, dt_cadastro) 
                 values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP) returning id_usuario`;

    let usuario = await execute(sql, [nome, email, senha, endereco, complemento,
                                bairro, cidade, numero, uf, cep, telefone]);

    return usuario[0];
}

async function BuscarEmail(email) {

    const sql = `select id_usuario, senha, nome, email, endereco, complemento,
    bairro, cidade, uf, cep, dt_cadastro
    from usuario    
    where email = ?`;

    const usuario = await execute(sql, [email]);

    if (usuario.length == 0)
        return [];
    else
        return usuario[0];
}

async function BuscarUserId(id_usuario) {

    const sql = `select id_usuario, nome, email, endereco, complemento,
    bairro, cidade, uf, cep, dt_cadastro
    from usuario    
    where id_usuario = ?`;

    const usuario = await execute(sql, [id_usuario]);

    if (usuario.length == 0)
        return [];
    else
        return usuario[0];
}

export default { Listar, Inserir, BuscarEmail, BuscarUserId };