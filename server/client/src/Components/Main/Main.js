import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Main.css'; // Ensure you have corresponding CSS for styling

const DashboardContent = () => {
    const barData = {
        labels: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
        datasets: [
            {
                label: 'Dataset 1',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [2500, 5000, 7500, 10000, 7500, 5000, 2500]
            },
            {
                label: 'Dataset 2',
                backgroundColor: 'rgba(153,102,255,0.4)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(153,102,255,0.6)',
                hoverBorderColor: 'rgba(153,102,255,1)',
                data: [1500, 4000, 6500, 9000, 6500, 4000, 1500]
            }
        ]
    };

    const pieData = {
        labels: ['Certificates', 'Students', 'Categories of Courses'],
        datasets: [
            {
                data: [300, 300, 9],
                backgroundColor: ['rgba(75,192,192,0.4)', 'rgba(153,102,255,0.6)', '#FFCE56'],
                hoverBackgroundColor: ['rgba(75,192,192,0.4)', 'rgba(153,102,255,0.6)', '#FFCE56']
            }
        ]
    };

    return (
        <div className="dashboard-content">
            <div className="top-bar">
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="top-icons">
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faEnvelope} />
                    
                </div>
            </div>
            <hr/>
           
            <h1>Dashboard</h1>
            <div className="cards">
                <div className="card blue">
                    <h3>Certificates</h3>
                   
                </div>
                <div className="card orange">
                    <h3>Students</h3>
                    
                </div>
                <div className="card green">
                    <h3>Categories of Courses</h3>
                    
                </div>
            </div>
            <div className="charts">
                <div className="chart">
                    <Bar data={barData} />
                </div>
                <div className="chart small-pie">
                    <Pie data={pieData} />
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;
