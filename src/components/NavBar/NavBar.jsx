import React from 'react'
import '../NavBar/NavBar.css'

export const NavBar = () => {
    return (
        <nav className='NavContainer'>
            <p className='navLista'><a className='navEnlace' href='/Registrar.html'>Registrar</a></p>
            <p className='navLista'><a className='navEnlace' href='/Ingresar.html'>Ingresar</a></p>
        </nav>
    );
}
export default NavBar;