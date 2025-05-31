import React from "react";
//import logo from '../../assets/logo.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar">

        <NavLink to="/"> Inicio </NavLink>
        <NavLink to="/services"> Servicios </NavLink>
        <NavLink to="/contact"> Contacto </NavLink>
        <NavLink to="/login"> Iniciar sesión </NavLink>

        </nav>
    );
}

export default Navbar;

/*
            <div class="nav-brand d-flex">
                <img src={logo} alt="logoHotel" class="px-2"/>
                <h1 class="fs-5 px-2">HotelAPI</h1>
            </div>

            <ul class="nav-list d-flex list-unstyled p-4">
                <li class="nav-item px-2">
                    <a href="#" class="nav-link">
                        Inicio
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a href="#" class="nav-link">
                        Servicios
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a href="#" class="nav-link">
                        Contacto
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a href="#" class="nav-link">
                        Iniciar sesión
                    </a>
                </li>
            </ul>
            */