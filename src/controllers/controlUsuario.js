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

export default { Listar };