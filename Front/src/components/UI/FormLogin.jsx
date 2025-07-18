import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginUser = {
            email: formData.email,
            password: formData.password,
        }
        try {
            const response = await axios.post("http://localhost:3000/users/login", loginUser);

            if (response.status === 200) {
                console.log("Inicio de sesión exitoso. Rol: ", response.data.name);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("hotelId", response.data.hotel_id);
                localStorage.setItem("name", response.data.name);
                localStorage.setItem("hotelName", response.data.hotelName);


                const role = localStorage.getItem("role");

                if (role === "superadmin" || role === "admin" || role === "staff") {
                    navigate("/paneladmin");
                } else {
                    navigate("/");
                }

            }

        } catch (error) {
            console.error(error);
        }
    }

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Correo electrónico",
            errorMessage: "El correo electrónico no es válido.",
            label: "Correo electrónico",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            errorMessage: "La contraseña debe tener al menos 6 caracteres.",
            label: "Contraseña",
            pattern: ".{6,}",
            required: true
        }
    ];

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit} className="mt-5">

            {inputs.map((input) => (
                <FormInput key={input.id} value={formData[input.name]} handleOnChange={handleOnChange} {...input} />
            ))

            }

            <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>

        </form>
    )
}

export default FormLogin;

