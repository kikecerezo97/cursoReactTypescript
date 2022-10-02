import {useState} from "react";

interface ContadorProps {

}

export function Contador(props: ContadorProps): JSX.Element {

    const [count,setCount] = useState<number>(0);


    return <>
        <div>
            <p>Haz hecho click {count} veces </p>
                <button onClick={()=>{
                setCount(count+1)
                }}>
                    Click
                </button>
        </div>
    </>

}