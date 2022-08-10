import './ProductCard.scss'
import mac from "../../assets/img/store-card-13-mac-nav-202203.png";
import React from "react";

interface ProductCardProps{
    titulo: string;
    url: string;
    imagen: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({titulo,url, imagen}: ProductCardProps) => {
    return <>
        <div className="col" id="product-card">
            <img src={imagen}
                 className="d-block mx-auto img-fluid"
            />
            <a href={url}>
                <div className="title">
                    {titulo}
                </div>
            </a>

        </div>
    </>
}