import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <>
            <CartWidget />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            [__DCZ ReactJS__]
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item dropdown">
                {/* Agrega la clase "dropdown" para crear un submenú */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriasDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="categoriasDropdown"
                >
                  {/* Contenido del submenú */}
                  <a className="dropdown-item" href="#">
                    Categoria 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Categoria 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Categoria 3
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sucursales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    

    </>
  );
};

export default NavBar;
