import React, {useState} from 'react';

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
        <React.Fragment>
            <div>
                <div className="number">
                    <button onClick={handleClickMinus} className="minus">-</button>
                    {rates}
                    <button onClick={handleClickSum} className="plus">+</button>
                </div>
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </React.Fragment>
    )
}

export default ItemCounter;