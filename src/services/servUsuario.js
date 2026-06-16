import repositoryUsuario from "../repositories/repoUsuario.js";

async function Listar() {
    const usuarios = await repositoryUsuario.Listar();

    return usuarios;
}

export default { Listar };