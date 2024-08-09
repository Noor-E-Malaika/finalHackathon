import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBookOpen, faUserGraduate, faCertificate, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Added faSignOutAlt
import './Dashboard.css';

const Dashboard = () => {
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user authentication details here (e.g., remove token from localStorage)
        localStorage.removeItem('authToken');
        // Update state or context if needed
        // Redirect to login page or update UI as needed
        setShowLogoutModal(false);
        navigate('/login'); // Assuming you have a route for the login page
    };

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2>Admin Portal</h2>
                <hr/>
                <ul>
                    <li><Link to="/dashboard/main"><FontAwesomeIcon icon={faChartLine} /> Dashboard</Link></li>
                    <li><Link to="/dashboard/courses"><FontAwesomeIcon icon={faBookOpen} /> Courses</Link></li>
                    <li><Link to="/dashboard/students"><FontAwesomeIcon icon={faUserGraduate} /> Students</Link></li>
                    <li><Link to="/dashboard/certificate"><FontAwesomeIcon icon={faCertificate} /> Certificate</Link></li>
                    
                    <li><a href="#" onClick={() => setShowLogoutModal(true)}><FontAwesomeIcon icon={faCog} /> Logout</a></li>
                </ul>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
            {showLogoutModal && (
                <div className="logout-modal">
                    <div className="modal-content">
                        <FontAwesomeIcon icon={faSignOutAlt} size="3x" />
                        <h3>User Logout</h3>
                        <p>Are you sure you want to logout?</p>
                        <button onClick={() => setShowLogoutModal(false)}>Cancel</button>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

