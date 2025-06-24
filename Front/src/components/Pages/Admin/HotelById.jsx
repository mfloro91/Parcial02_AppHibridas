import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../routes/UiComponents'
import axios from 'axios'


function HotelById() {

    const { id } = useParams()
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const goToHotels = () => {
        navigate('/hotels')
    }

    // Endpoint: get hotel by id
    useEffect(() => {

        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");

        if (!token || (role !== "superadmin" && role !== "admin")) {
            navigate("/");
            return;
        }

        const fetchHotelById = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`http://localhost:3000/hotels/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setHotel(res.data);
                setLoading(false);

            } catch (err) {
                setError("No se pudo obtener el hotel.");
                setLoading(false);

            }
        };

        fetchHotelById();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!hotel) return <p>No se encontró el hotel.</p>;

    //Endpoint: delete hotel by id
    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que quieres eliminar este hotel?")) {
            try {
                const token = localStorage.getItem("token");
                await axios.delete(`http://localhost:3000/hotels/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                alert("Hotel eliminado correctamente.");
                navigate('/hotels');
            } catch (err) {
                console.error(err);
                alert("Error al eliminar el hotel.");
            }
        }
    }

    return (
        <div>
            <h2> {hotel.name} </h2>
            <p> {hotel.description} </p>
            <p> Ciudad: {hotel.city} </p>
            <p> País: {hotel.country} </p>
            <ul>
                {hotel.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>


            <Button text="Volver a hoteles" variant="success" onClick={goToHotels}>  </Button>
            <Button text="Editar hotel" variant="warning" onClick={() => navigate(`/hotels/edithotel/${id}`)}>  </Button>


            {localStorage.getItem("role") === "superadmin" && (
                <Button text="Eliminar hotel" variant="danger" onClick={handleDelete}>  </Button>
            )}



        </div>
    )
}

export default HotelById