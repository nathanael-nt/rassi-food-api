import repositoryUsuario from "../repositories/repoUsuario.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";

async function Listar() {
    const usuarios = await repositoryUsuario.Listar();

    return usuarios;
}

async function Login(email, senha) {

    const usuario = await repositoryUsuario.BuscarEmail(email);

    if (usuario.length == 0)
        return [];
    else {
        if (await bcrypt.compare(senha, usuario.senha)) {
            delete usuario.senha;
            usuario.token = jwt.CreateJWT(usuario.id_usuario);

            return usuario;
        }
        else
            return [];
    }
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, numero, uf, cep, telefone) {

    const validarUsuario = await repositoryUsuario.BuscarEmail(email);

    if (validarUsuario.id_usuario)
        throw "Já existe uma conta criada com esse e-mail!";

    const hashSenha = await bcrypt.hash(senha, 10);

    const usuario = await repositoryUsuario.Inserir(nome, email, hashSenha, endereco, complemento,
        bairro, cidade, numero,uf, cep, telefone);

    usuario.token = jwt.CreateJWT(usuario.id_usuario);

    return usuario;
}

async function Perfil(id_usuario) {

    const usuario = await repositoryUsuario.BuscarUserId(id_usuario);

    return usuario;
}

export default { Listar, Inserir, Login, Perfil };