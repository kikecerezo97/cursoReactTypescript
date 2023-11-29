import { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import * as goResService from '../../services/GoRestService';
import { Usuario } from "../../models/Usuario";
import { CrearUsuario } from "../../components/CrearUsuario";


interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}: HomeProps) => {

    const [listUsuarios, setListUsarios] = useState<Usuario[]> ([]);

    useEffect(()=> {
        getListUsuario()
    },[]);


    const getListUsuario = async () =>{

        const res = await goResService.getUsuarios();
        setListUsarios(res.data)
        console.log(res.data);
    }

    return <>
        <div className="container p-4">
            <h2>Lista de Usuarios</h2>  
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Genero</th>
                    <th>Estatus</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsuarios.map((i, index) => (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.gender}</td>
                            <td>{i.status}</td>
                        </tr>
                        )
                    )}
                   
                
                </tbody>
            </Table>
        </div>
      
    </>;
}