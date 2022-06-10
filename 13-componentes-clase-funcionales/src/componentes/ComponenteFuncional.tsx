interface ComponenteFuncionalProps{
    name: string;
}

export const ComponenteFuncional: React.FC<ComponenteFuncionalProps>  = ({name}) => {
    return(<>
        Hola desde un componente funcional {name}
    </>)
}