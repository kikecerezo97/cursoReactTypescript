import React from "react";

interface ComponenteClaseProps{
    name: string;
}
export class ComponenteClase extends React.Component<ComponenteClaseProps, any>{
    constructor(props: ComponenteClaseProps) {
        super(props);
    }

    render() {
        return <>
        Hola mundo desde un componente de clase {this.props.name}
        </>;
    }

}