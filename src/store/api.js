import http from './http';
import axios from 'axios';

const apiKey = '?api_key=303d0b9b2604afaec6310fbc6a6543b3'
async function movies(uri){
    const response = await http.get(uri + apiKey);
    return response;
}