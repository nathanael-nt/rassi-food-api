import repositoryUsuarioFavorito from "../repositories/repoUsuarioFavorito.js";

async function Listar() {
    const favoritos = await repositoryUsuarioFavorito.Listar();

    return favoritos;
}

export default { Listar };