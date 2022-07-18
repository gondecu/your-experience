import React, {useState} from 'react';
import '../css/Counter.css';

function ItemCounter({initial, stock, onAdd}){
    const [rates, setRates] = useState(initial);

    const handleClickSum = () =>{
        if(rates < stock){
            const aux = rates+1
            setRates(aux)
        }
    };

    const handleClickMinus = () =>{
        if(rates > initial){
            const aux = rates-1
            setRates(aux)
        }
    };

    return (
        
            <div>
                <div className="carrito">
                    <button onClick={handleClickMinus} className="minus">-</button>
                    <input>{rates}</input>
                    <button onClick={handleClickSum} className="plus">+</button>
                </div>
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
       
    )
}

export default ItemCounter;