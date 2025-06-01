import React, { useState } from "react";
import FormInput from "./FormInput";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });

    const inputs = [{
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Nombre",
        errorMessage: "El nombre debe tener al menos 3 caracteres.",
        label: "Nombre",
        pattern: "^[A-Za-z]{3,}$",
        required: true
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Correo electrónico",
        errorMessage: "El correo electrónico no es válido.",
        label: "Correo electrónico",
        required: true
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Contraseña",
        errorMessage: "La contraseña debe tener al menos 6 caracteres.",
        label: "Contraseña",
        pattern: ".{6,}",
        required: true
    },
    {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirmar contraseña",
        errorMessage: "Las contraseñas no coinciden.",
        label: "Confirmar contraseña",
        pattern: formData.password,
        required: true
    },
    {
        id: 5,
        name: "message",
        type: "text",
        placeholder: "Mensaje (opcional)",
        label: "Mensaje"
    }];

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>

            {inputs.map((input) => (
                <FormInput key={input.id} value={formData[input.name]} handleOnChange={handleOnChange} {...input} />
            ))

            }
            
            <button type="submit" className="btn btn-primary mt-3">Enviar</button>

        </form>
    )
}

export default Form;

