import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Certificate from './Components/Certificate/Certificate';
import Students from './Components/Students/Students';
import Courses from './Components/Courses/Courses';
import Settings from './Components/Settings/Settings';
import Main from './Components/Main/Main'

function App() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="main" element={<Main />} /> 
                <Route path="certificate" element={<Certificate />} />
                <Route path="students" element={<Students />} />
                <Route path="courses" element={<Courses />} />
                <Route path="settings" element={<Settings />} />
                
                
            </Route>
        </Routes>
    );
}

export default App;
