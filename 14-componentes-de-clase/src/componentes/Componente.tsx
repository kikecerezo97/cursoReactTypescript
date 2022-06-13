import React from "react";

interface ComponenteProps {
    name: string;
}

export class Componente extends React.Component<ComponenteProps, ComponenteState>{

    constructor(props: ComponenteProps) {
        super(props);
        this.state = {
            name:  this.props.name
        }
        console.log("constructor");
    }

    render() {
        console.log("render")
        return <>
            Hola, {this.state.name}<br/>
            <button onClick={()=> {
                this.setState({name: 'Kike'})
            }
            }>
                Cambiar Nombre
            </button>
        </>;
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate(prevProps: Readonly<ComponenteProps>, prevState: Readonly<ComponenteState>, snapshot?: any) {
        console.log("componentDidUpdate")
        console.log("prev Props")
        console.log(JSON.stringify(prevProps))
        console.log("current props")
        console.log(JSON.stringify(this.props))
        console.log("prev State")
        console.log(JSON.stringify(prevState))
        console.log("current state")
        console.log(JSON.stringify(this.state))

    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
}

interface ComponenteState{
    name: string;
}