import React from 'react'
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
        <nav className='NavContainer'>
            <div className='img'>
                <img className='NavImg' src="./assets/Biblioteca.jpg"></img>
            </div>
            <div className='navLista'></div>
                <p><a className='navEnlace' href='/Registrar.html'>Registrar</a></p>
                <p><a className='navEnlace' href='/Ingresar.html'>Ingresar</a></p>
           
        </nav>
    );
}
export default NavBar;