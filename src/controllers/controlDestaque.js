import serviceDestaque from "../services/servDestaque.js";

async function Listar(req, res) {
    try {
        const destaques = await serviceDestaque.Listar();
        res.status(200).json(destaques);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };