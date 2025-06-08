import React from "react";
//import logo from '../../assets/logo.png';
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();

    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Buscando: ${search}`);
    };

    return (
        <nav>

            <NavLink to="/"> Inicio </NavLink>
            <NavLink to="/services"> Servicios </NavLink>
            <NavLink to="/contact"> Contacto </NavLink>
            <NavLink to="/paneladmin"> Admins </NavLink>

            {location.pathname === "/services" && (
                <form onSubmit={handleSearchSubmit} style={{ display: "inline-block", margin: "0 10px" }}>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={search}
                        onChange={handleSearchChange}
                        style={{ padding: "4px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                    <button type="submit" style={{ padding: "4px 8px", background: "none", border: "none", cursor: "pointer" }}>
                        <span role="img" aria-label="buscar" style={{ fontSize: "18px" }}>🔍</span>
                    </button>
                </form>
            )}
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