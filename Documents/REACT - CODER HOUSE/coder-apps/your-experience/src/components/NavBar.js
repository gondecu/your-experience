import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import ItemCounter from './ItemCounter';


function NavBar(){
    return (
        <React.Fragment>
           
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Your experience</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Comidas</a>
                        <a className="nav-item nav-link" href="#">Escapadas</a>
                        {/* <a className="nav-item nav-link" href="#">Destacadas</a> */}
                        <CartWidget />
                        </div>
                    </div>
                </nav>
                {/* <header className="header"></header> */}
                <ItemListContainer />
                <ItemCounter initial={1} stock={5}/>
        </React.Fragment>
    )
}


export default NavBar;
