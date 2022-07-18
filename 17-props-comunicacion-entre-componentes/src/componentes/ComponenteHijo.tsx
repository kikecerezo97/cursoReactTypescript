interface ComponenteHijoProps{
    name: string;
    apellido1: string;
    apellido2?: string;
    edad: number;
    clickReturnName: (nameComplete: string) => void

}

export function ComponenteHijo (props: ComponenteHijoProps): JSX.Element{

    const devolverNombre = () => {
        let nombreCompleto = props.name + ' ' + props.apellido1;

        if (props.apellido2!= undefined){
            nombreCompleto += ' '+ props.apellido2;
        }

    //  console.log(nombreCompleto);
      props.clickReturnName(nombreCompleto)



    }

    return <>
        Hola, {props.name + ' ' + props.apellido1 + ' '}
        {(props.apellido2!= undefined)? props.apellido2: null}

        <br/>
        Edad: {props.edad} años.<br/>
        <button
            onClick={()=> {
                devolverNombre();
            }}
        >
            Devolver el nombre completo
        </button>
    </>


}