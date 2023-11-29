import axios from "axios";
import { Usuario } from "../models/Usuario";
import { ACCESSTOKEN } from "../constantes";

const API = 'https://gorest.co.in/public/v2/';


const headers = {
    'Content-Type': 'aplication/json',
    'Authorization': 'Bearer '+ ACCESSTOKEN
}


export const getUsuarios = async () => {
    return axios.get<Usuario []>(API+ 'users', {headers: headers});
}

