import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';


function CartWidget(){
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faShoppingCart} className='shoppingCart'/>
        </React.Fragment>
    )
}
export default CartWidget;