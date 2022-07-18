import { useEffect, useState } from "react";

interface ComponenteFuncionalProps {
    name: string;
}

export function ComponenteFuncional (props: ComponenteFuncionalProps): JSX.Element{

    const [name,setName] = useState<string>('');

    useEffect(()=> {
        console.log('useEffect');
        setName(props.name);

    },[props.name])

    return <>
        Hola, {name}<br/>
        <button
        onClick={()=> {
            setName('Kike')
        }}
        >
            Cambiar a  mi Nombre
        </button>
    </>
}