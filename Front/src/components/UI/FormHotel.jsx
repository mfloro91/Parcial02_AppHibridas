import React, { useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormHotel = ({ initialData, isEditing, handleSubmit }) => {

    const [formData, setFormData] = useState(initialData || {
        name: "",
        logo: "",
        description: "",
        languages: [],
        country: "",
        city: "",

    });

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Nombre",
            errorMessage: "El nombre debe tener al menos 3 caracteres.",
            label: "Nombre",
            required: true
        },
        {
            id: 2,
            name: "logo",
            type: "text",
            placeholder: "Logo",
            label: "Logo del hotel",
            required: true
        },
        {
            id: 3,
            name: "description",
            type: "text",
            placeholder: "Descripción del hotel",
            label: "Descripción",
            required: true
        },
        {
            id: 4,
            name: "languages",
            type: "text",
            placeholder: "Lenguajes (separados por comas)",
            label: "Lenguajes",
            required: true
        },
        {
            id: 5,
            name: "country",
            type: "text",
            placeholder: "País",
            label: "País",
            required: true
        },
        {
            id: 6,
            name: "city",
            type: "text",
            placeholder: "Ciudad",
            label: "Ciudad",
            required: true
        }
    ];

    return (
        <form onSubmit={(e) => handleSubmit(e, formData)}>

            {inputs.map((input) => (
                <FormInput key={input.id} value={formData[input.name]} handleOnChange={handleOnChange} {...input} />
            ))

            }

            <button type="submit" className="btn btn-primary mt-3">
                {isEditing ? "Editar hotel" : "Crear hotel"}
            </button>


        </form>
    )
}




export default FormHotel;