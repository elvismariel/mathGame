import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.tenor.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getImg(search) {
        return api.get(`/v1/search?q=${search}&key=LIVDSRZULELA&limit=8`)
        .then(res => {
            const rand = Math.floor(Math.random() * 8);
            const gif = res.data.results[rand].media[0].tinygif;
            
            return gif.url;
        })
        .catch(err => {
            console.log("Erro ao Show Photo!", err);
        })
    }
}