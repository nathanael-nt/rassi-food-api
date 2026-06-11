import serviceEmpresa from "../services/servEmpresa.js";

async function Listar(req, res) {
    try {

        const empresas = await serviceEmpresa.Listar();
        res.status(200).json(empresas);

    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };