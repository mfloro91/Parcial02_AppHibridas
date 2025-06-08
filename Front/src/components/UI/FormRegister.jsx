import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {

    const [formData, setFormData] = useState({
        hotel_id: "",
        name: "",
        userName: "",
        email: "",
        password: "",
    });
    
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            hotel_id: formData.hotel_id,
            name: formData.name,
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
        }
        try {
            await axios.post("http://localhost:3000/users", newUser);
            setFormData({
                hotel_id: "",
                name: "",
                userName: "",
                email: "",
                password: "",
            });
        
            navigate("/login");


        } catch (error) {
            console.error(error);
        }
    }


    const inputs = [
        {
            id: 1,
            name: "hotel_id",
            type: "text",
            placeholder: "ID del hotel",
            label: "ID del hotel",
            required: true
        },
        {
            id: 2,
            name: "name",
            type: "text",
            placeholder: "Nombre",
            errorMessage: "El nombre debe tener al menos 3 caracteres.",
            label: "Nombre",
            pattern: "^[A-Za-z]{3,}$",
            required: true
        },
        {
            id: 3,
            name: "userName",
            type: "text",
            placeholder: "Nombre de usuario",
            label: "Nombre de usuario",
            required: true
        },
        {
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Correo electrónico",
            errorMessage: "El correo electrónico no es válido.",
            label: "Correo electrónico",
            required: true
        },
        {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            errorMessage: "La contraseña debe tener al menos 6 caracteres.",
            label: "Contraseña",
            pattern: ".{6,}",
            required: true
        },
    ];

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>

            {inputs.map((input) => (
                <FormInput key={input.id} value={formData[input.name]} handleOnChange={handleOnChange} {...input} />
            ))

            }

            <button type="submit" className="btn btn-primary mt-3">Crear usuario</button>

        </form>
    )
}




export default FormRegister;