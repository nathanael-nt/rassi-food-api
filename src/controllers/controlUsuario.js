import serviceUsuario from "../services/servUsuario.js";

async function Listar(req, res) {
    try {
        const usuarios = await serviceUsuario.Listar();
        res.status(200).json(usuarios);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}


async function Login(req, res) {

    const { email, senha } = req.body;
    const usuario = await serviceUsuario.Login(email, senha);

    if (usuario.length == 0)
        res.status(401).json({ error: "E-mail ou senha inválida!" });
    else
        res.status(200).json(usuario);
}

async function Inserir(req, res) {

    try {
        const { nome, email, senha, endereco, complemento, bairro, cidade, numero, uf, cep, telefone } = req.body;

        const usuario = await serviceUsuario.Inserir(nome, email, senha, endereco,
            complemento, bairro, cidade, numero, uf, cep, telefone);

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error });
    }
}

async function Perfil(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const usuario = await serviceUsuario.Perfil(id_usuario);

        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar, Login, Inserir, Perfil };