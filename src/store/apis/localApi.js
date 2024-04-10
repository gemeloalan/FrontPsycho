import axios from "axios";

export const api = axios.create({
    // baseURL: 'https://pokeapi.co/api/v2/'
    baseURL: 'http://127.0.0.1:8000/api/'
});