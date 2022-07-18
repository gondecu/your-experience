import React from 'react';
import '../css/ProductDetail.css';
import {ItemCounter} from './ItemCounter';

export const ItemD = ({ detail }) => {
    
    const { title, description, price, images } = detail;

    return (
        <main>
            <article>
                <div className="articulo">
                    <div className="fondo-imagen"><img className="imagen-vino-portada" src={images} alt={title}/></div>
                    <div className="info-vino">
                        <p className="nombre" id="nombre">{title}</p>
                        <p className="descripcion" id="descripcion">{description}</p>
                        <p className="precio" id="precio">{price}</p>
                    </div>
                    <ItemCounter initial={1} stock={5}/>
                </div>
            </article>
        </main>















      
    )
}