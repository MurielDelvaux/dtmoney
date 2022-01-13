import axios from 'axios';

//crio uma instancia pois vou setar algumas informações padrões para todas as requisições p/api
export const api = axios.create({
    baseURL:'http://localhost:3000/api',
    
})