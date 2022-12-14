import axios from "axios";

const getFromApi = async (setState) => {
    const peticion = await axios.get("https://api.bigcartel.com/endlehomegoods/products.js")
    let primerosNueve = peticion.data.slice(0,9)
    setState(primerosNueve);
}

export {
    getFromApi
}