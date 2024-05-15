import { Link, useParams } from "react-router-dom"
import * as goResService from '../../services/GoRestService';
import { useEffect, useState } from "react";
import { Usuario } from "../../models/Usuario";
import { Button } from "react-bootstrap";

interface EditarUsuarioProps{

}
export const EditarUsuario: React.FC<EditarUsuarioProps> = ()=> {
    const {id} = useParams();
    const [usuario,setUsuario] = useState<Usuario> ({name: '', email: '', gender: '', status: ''}); 


    useEffect( ()=> {
     getUsuario(parseInt(id!));   
    }, [id])

    const getUsuario = async (idUsuario: number) => {
        const res = await goResService.getUsuario(idUsuario);
        setUsuario(res.data);

    } 

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        setUsuario({...usuario, [e.target.id]: e.target.value})
    }

    const onSave = async () => {
        console.log(usuario);
        const res = await goResService.putUsuario(usuario);
        setUsuario(res.data);
        alert('Se ha modificado el usuario Correctamente')

    }

    return <>
        <div className="container p-4">
            <h2>Editar: {id}</h2>
            <Link to={"/"}>Regresar</Link>

            <br/><br/>
        <div className="mb-3 mt-3">
            <label className="form-label">Nombre: </label>
            <input value={usuario.name} 
                    onChange={onChange}
                    id="name"
                    type="text" 
                    className="form-control"/>
        </div>

        <div className="mb-3 mt-3">
            <label className="form-label">Email: </label>
            <input 
                value={usuario.email} 
              onChange={onChange}
              id="email"
            type="text"  className="form-control"/>
        </div>

        <div className="mb-3 mt-3">
            <label className="form-label">Genero: </label>
            <input value={usuario.gender} 
                    onChange={onChange}
                    id="gender"
                    type="text"  
                    className="form-control"/>
        </div>

        <div className="mb-3 mt-3">
            <label className="form-label">Estatus: </label>
            <select value={usuario.status!}
                    onChange={onChange}
                    id="status"
                    className="form-control"
                >
                    <option value="inactive">inactive</option>
                    <option value="active">active</option>
            </select>
        
        </div>

        <div className="mb-3 mt-3">
            <Button variant="primary" onClick={()=> {onSave() }}>
                Guardar
            </Button>
        </div>

        </div>
       
    </>
}