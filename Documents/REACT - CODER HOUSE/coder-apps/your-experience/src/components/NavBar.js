import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <React.Fragment>
           
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Your experience</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-item nav-link active" >Comidas</a>
                        <a className="nav-item nav-link">Escapadas</a>
                        {/* <a className="nav-item nav-link" href="#">Destacadas</a> */}
                        <CartWidget />
                        </div>
                    </div>
                </nav>
                {/* <header className="header"></header> */}
        </React.Fragment>
    )
}


export default NavBar;
