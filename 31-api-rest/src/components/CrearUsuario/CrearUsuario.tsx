import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Usuario } from "../../models/Usuario";
import * as goResService from '../../services/GoRestService';

interface CrearUsuarioProps{
    returnNewUser: (user: Usuario) => void
}
export const CrearUsuario: React.FC<CrearUsuarioProps> = ({returnNewUser}: CrearUsuarioProps) =>{

    const initusuario: Usuario = {name: '', email: '', gender: 'female', status: 'active'}

    const [show, setShow] = useState(false);

    const [newUser, setNewUser] = useState<Usuario>(initusuario);

    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setNewUser({...newUser, [e.target.id]: e.target.value})
    }

    const onSave = async () => {
        const res = await goResService.postNuevoUsuario(newUser);
            setNewUser(initusuario);
            returnNewUser(res.data);
            handleClose();
    }

    return <>
        <button 
            onClick={()=> { handleShow()}}
            className="btn btn-primary"> 
            Nuevo Usuario 
        </button>
        <br/><br/>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label"> Nombre: </label>
                    <input value={newUser.name!} onChange={onChange} type="text" id="name" className="form-control" placeholder="Luis Enrique"/>
                </div>

                <div className="mb-3">
                    <label className="form-label"> Email: </label>
                    <input value={newUser.email!} onChange={onChange} type="email" id="email" className="form-control" placeholder="correo@gmail.com"
                     autoComplete="off"/>
                </div>
                <div className="mb-3">
                    <label className="form-label"> Genero: </label>
                    <select value={newUser.gender!} onChange={onChange} id="gender" className="form-control" >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={()=> {onSave()}}>
                    Guardar
                </Button>
            </Modal.Footer>

        </Modal>
    </>
}