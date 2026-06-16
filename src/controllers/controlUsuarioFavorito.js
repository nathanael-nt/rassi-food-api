import serviceUsuarioFavorito from "../services/servUsuarioFavorito.js";

async function Listar(req, res) {
    try {
        const favoritos = await serviceUsuarioFavorito.Listar();
        res.status(200).json(favoritos);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };