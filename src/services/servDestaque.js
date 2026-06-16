import repositoryDestaque from "../repositories/repoDestaque.js";

async function Listar() {
    const destaques = await repositoryDestaque.Listar();
    return destaques;
}

export default { Listar };