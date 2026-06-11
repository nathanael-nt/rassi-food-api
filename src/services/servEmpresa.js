import repositoryEmpresa from "../repositories/repoEmpresa.js";
    
async function Listar() {

    const empresas = await repositoryEmpresa.Listar();
    return empresas;

}

export default { Listar };