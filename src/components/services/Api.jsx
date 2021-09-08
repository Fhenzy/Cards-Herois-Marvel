import axios from 'axios';
import md5 from 'md5';

//const url = 'http://gateway.marvel.com/v1/public/characters?';
const apikey = '5226f54cae4f2dd4cb2bed928f072701';
const privateKey = '08a9f49fae138efadfd1837ad7d17f4797b8bd8a';
const ts = Number(new Date());

const hash = md5(ts + privateKey + apikey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: ts,
        apikey: apikey,
        hash: hash,
    },
    
})
export default api;