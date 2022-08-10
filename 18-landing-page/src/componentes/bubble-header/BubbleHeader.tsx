import './BubbleHeader.scss'
import React from "react";
import message from "../../assets/img/message.jpeg";

interface BubbleHeaderProps{
    titulo: string;
    subtitulo: string;
    url: string;
    imagen: string;
    flechaDerecha: boolean; // true o false >

}

export const BubbleHeader: React.FC<BubbleHeaderProps> = ({titulo, subtitulo,url, imagen, flechaDerecha}: BubbleHeaderProps) => {
    return <>
        <div className="row " id="bubble-header">
            <div className="col-md-2">
                <img src={imagen} className="d-block mx-auto"/>
            </div>
            <div  className="col-md-10">
                <div className="h5">
                    {titulo}<br/>
                    <a href={url} target="_blank" >
                        {subtitulo}
                        {(flechaDerecha == true) &&  <i className="bi bi-chevron-right"> </i> }

                    </a>
                </div>
            </div>
        </div>
    </>
}