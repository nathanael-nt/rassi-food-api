import repositoryBanner from "../repositories/repoBanner.js";
    
async function Listar() {

    const banners = await repositoryBanner.Listar();
    return banners;

}

export default { Listar };