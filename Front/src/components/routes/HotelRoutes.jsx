import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Hotels, CreateHotel } from '../../index.js';

function HotelRoutes() {
    const location = useLocation();

    return (
        <>
        {location.pathname === '/hotels' && <Hotels />}
            
            <Routes>
                <Route path="/" element={<Outlet />} />
                <Route path="createhotel" element={<CreateHotel />} />
            </Routes>
        </>
    );
}

export default HotelRoutes;