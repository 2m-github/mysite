import http from './http';
import axios from 'axios';

const apiKey = '?api_key=303d0b9b2604afaec6310fbc6a6543b3'
export async function movies(uri){
    const response = await http.get(uri + apiKey);
    return response;
}

export async function moviesDetail(id){
    const response = await http.get("/movie/" + id + apiKey);
    return response;
}