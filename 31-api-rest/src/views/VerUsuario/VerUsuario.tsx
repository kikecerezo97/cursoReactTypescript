import { Link, useParams } from "react-router-dom"
import * as goResService from '../../services/GoRestService';
import { useEffect, useState } from "react";
import { Usuario } from "../../models/Usuario";

interface VerUsuarioProps{

}
export const VerUsuario: React.FC<VerUsuarioProps> = ()=> {
    const {id} = useParams();
    const [usuario,setUsuario] = useState<Usuario> ({name: '', email: '', gender: '', status: ''}); 


    useEffect( ()=> {
     getUsuario(parseInt(id!));   
    }, [id])

    const getUsuario = async (idUsuario: number) => {
        const res = await goResService.getUsuario(idUsuario);
        setUsuario(res.data);

    } 
    return <>
        <div className="container p-4">
            <h2>Usuario: {id}</h2>
            <Link to={"/"}>Regresar</Link>

            <br/><br/>
        <div className="mb-3 mt-3">
            <label className="form-label">Nombre: </label>
            <input value={usuario.name} type="text" disabled className="form-control"/>
        </div>

        <div className="mb-3 mt-3">
            <label className="form-label">Email: </label>
            <input value={usuario.email} type="text" disabled className="form-control"/>
        </div>

        <div className="mb-3 mt-3">
            <label className="form-label">Genero: </label>
            <input value={usuario.gender} type="text" disabled className="form-control"/>
        </div>

        <div className="mb-3 mt-3">
            <label className="form-label">Estatus: </label>
            <input value={usuario.status} type="text" disabled className="form-control"/>
        </div>

        </div>
       
    </>
}