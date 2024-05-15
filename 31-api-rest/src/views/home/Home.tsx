import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import * as goResService from '../../services/GoRestService';
import { Usuario } from "../../models/Usuario";
import { CrearUsuario } from "../../components/CrearUsuario/CrearUsuario";
import { Link } from "react-router-dom";


interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}: HomeProps) => {

    const [listUsuarios, setListUsuarios] = useState<Usuario[]> ([]);

    useEffect(()=> {
        getListUsuario()
    },[]);


    const getListUsuario = async () =>{

        const res = await goResService.getUsuarios();
        setListUsuarios(res.data)
        console.log(res.data);
    }

    return <>
        <div className="container p-4">
            <h2>Lista de Usuarios</h2>  

            <CrearUsuario returnNewUser={(newUser)=> {
                setListUsuarios(current => [newUser,...current]);
            }} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Genero</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsuarios.map((i, index) => (
                        <tr key={index}>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.gender}</td>
                            <td>{i.status}</td>
                            <td>
                                <Link to={"/usuario/" + i.id} className="text-primary">Ver </Link> 
                                <br/>
                                <Link to={"/editar/" + i.id} className="text-primary">Editar </Link> 
                            </td>
                        </tr>
                        )
                    )}
                   
                
                </tbody>
            </Table>
        </div>
      
    </>;
}