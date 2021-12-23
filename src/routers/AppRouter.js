import React from 'react';
import{BrowserRouter as Router, Routes, Route
} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import Mensaje  from '../components/Mensaje';
import Personaje  from '../pages/General/Personaje';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import General from '../pages/General'


export const AppRouter = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/general" element={<General />} /> 
            <Route path="/Personaje" element={<Personaje /> } />
            <Route path="/Mensaje" element={<Mensaje />} />
            </Routes>
           
        </Router>
    )

}

export default AppRouter;