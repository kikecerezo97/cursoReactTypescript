import axios from "axios";
import { Usuario } from "../models/Usuario";
import { ACCESSTOKEN } from "../constantes";

const API = 'https://gorest.co.in/public/v2/';


const headers = {
    'Authorization': ACCESSTOKEN
}


export const getUsuarios = async () => {
    return axios.get<Usuario []>(API+ 'users', {headers: headers});
}

export const postNuevoUsuario = async (nuevoUsuario: Usuario) => {
    return axios.post<Usuario>(API+ 'users', nuevoUsuario, {headers: headers} )
}

export const getUsuario = async (idUsuario: number) => {
    return axios.get<Usuario>(API+'users/'+ idUsuario, {headers: headers});
}
