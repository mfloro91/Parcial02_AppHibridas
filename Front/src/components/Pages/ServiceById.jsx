import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../routes/UiComponents'
import axios from 'axios'

function ServiceById() {

    const { id } = useParams()
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    const goToServices = () => {
        navigate('/services')
    }

    // Endpoint: get hotel by id
    useEffect(() => {
        if (!token) {
            navigate("/");
            return;
        }

        const fetchServiceById = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`http://localhost:3000/services/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setService(res.data);
                setLoading(false);

            } catch (err) {
                setError("No se pudo obtener el servicio.");
                setLoading(false);

            }
        };

        fetchServiceById();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!service) return <p>No se encontró el servicio.</p>;

    //Endpoint: delete service by id
    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este servicio?")) {
            try {
                const token = localStorage.getItem("token");
                await axios.delete(`http://localhost:3000/services/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                alert("Servicio eliminado correctamente.");
                navigate('/services');
            } catch (err) {
                console.error(err);
                alert("Error al eliminar el servicio.");
            }
        }
    }

    //Enpoint: reservar servicio
    const reservarServicio = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post('http://localhost:3000/orders', {
                service_id: service._id,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("¡Servicio reservado con éxito!");
        } catch (err) {
            alert("No se pudo reservar el servicio");
        }
    };


    return (
        < div >
            <h2> {service.title} </h2>
            <p> {service.description} </p>
            <p> Horarios: {service.availableHours} </p>



            <Button text="Volver a servicios" variant="success" onClick={goToServices}>  </Button>

            {["superadmin", "admin", "staff"].includes(role) && (
                <>
                    <Button text="Editar Servicio" variant="warning" onClick={() => navigate(`/services/editservice/${id}`)}> </Button>
                    <Button text="Eliminar servicio" variant="danger" onClick={handleDelete}> </Button>
                </>
            )}

            {["user"].includes(role) && (
                <>
                    <Button text="Reservar" variant="primary" onClick={reservarServicio} />
                </>
            )}

        </div >

    )
}

export default ServiceById