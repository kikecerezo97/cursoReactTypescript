import React, { FormEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { click } from '@testing-library/user-event/dist/click';
interface TareaModel {
  name: string;
  done: boolean;
}

function App() {
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const [listTareas, setListTareas] = useState<TareaModel []>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setNuevaTarea(e.target.value);
  }
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    addTask(nuevaTarea);
    setNuevaTarea('');

  }

  const addTask = (tarea: string): void => {
      const nuevasTareas: TareaModel [] = [...listTareas,{name: tarea, done: false}];
      setListTareas(nuevasTareas);
  }  


  const onClick = (pos: number): void => {
    const nuevasTareas: TareaModel [] = [...listTareas];
    nuevasTareas[pos].done = !nuevasTareas[pos].done;
    setListTareas(nuevasTareas);

  }

  const eliminarTarea = (pos: number):  void => {
    const nuevasTareas: TareaModel [] = [...listTareas];
    nuevasTareas.splice(pos, 1);
    setListTareas(nuevasTareas);
  }

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
          <div className="card-body">
              <h5 className="card-title text-center">Tareas</h5>

          </div>
          <div className="card-text p-3">
            <form onSubmit={handleSubmit}>
              <input type="text" 
                className="form-control"
                value={nuevaTarea}
                onChange={onChange}
                placeholder="Escribe tu tarea"/>
               <br/> 

              <button className="btn btn-primary w-100">Guardar</button>  
            </form>
            <br/>

            {listTareas.map((i: TareaModel, index: number) => (
              <div key={index} className='card tareas'>
                <div className="card-body">
                  <h5>{i.name}</h5>
                  <button 
                    onClick={()=> {
                      onClick(index);
                    }}
                    className={(i.done == true)? "btn btn-success" : "btn btn-secondary"}>
                      {(i.done == true)?'Realizada': 'Pendiente'}
                  
                  </button>
                  <button 
                    onClick={()=> {
                      eliminarTarea(index);
                    }}
                  className="btn btn-danger">
                    Eliminar
                  </button>
                </div>  

              </div>
            ))}

          </div>

           

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
