import React from 'react'

export const NavBar = () => {
    return (
        <div className='NavContainer'>
            <nav className='Nav'>                
                <ul className='navLista'>
                <div className='NavImg'>
                    <imag href='/src/assets/Biblioteca.jpeg'></imag>
                </div>
                    <li><a className='navEnlace' href='/Registrar.html'>Registrar</a></li>
                    <li><a className='navEnlace' href='/Ingresar.html'>Ingresar</a></li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;