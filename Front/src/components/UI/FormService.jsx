import React, { useState } from "react";
import FormInput from "./FormInput";

const FormService = ({ initialData, isEditing, handleSubmit }) => {

    const [formData, setFormData] = useState(initialData || {
        title: "",
        description: "",
        availableHours: "",
    });

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const inputs = [
        {
            id: 1,
            name: "title",
            type: "text",
            placeholder: "Título del servicio",
            errorMessage: "El título debe tener al menos 3 caracteres.",
            label: "Título",
            required: true
        },
        {
            id: 2,
            name: "description",
            type: "text",
            placeholder: "Descripción del servicio",
            label: "Descripción",
            required: true
        },
        {
            id: 3,
            name: "availableHours",
            type: "text",
            placeholder: "Horas disponibles (ej. 9-18)",
            label: "Horas disponibles",
            required: true
        },
    ];


    return (

        <form onSubmit={(e) => handleSubmit(e, formData)}>

            {inputs.map((input) => (
                <FormInput key={input.id} value={formData[input.name]} handleOnChange={handleOnChange} {...input} />
            ))

            }

            <button type="submit" className="btn btn-primary mt-3">
                {isEditing ? "Editar servicio" : "Crear servicio"}
            </button>


        </form>

    )
}



export default FormService;