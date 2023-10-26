import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:5000',
});

export const getItens = async(itensId, query) => {
    let url = `/itens/${itensId}/`

    if(query !==''){
        url += `?q=${query}`;
    }
    return api.get(url);
}
