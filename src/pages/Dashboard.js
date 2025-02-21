import React from 'react';
import './Dashboard.css'; // Import the CSS file
import { useAuth } from '../context/AuthContext'; // Import useAuth
import { Link } from 'react-router-dom'; // Import Link for navigation

const Dashboard = () => {
  const { user } = useAuth(); // Get the user from AuthContext

  // Sample device data with photos
  const devices = [
    {
      id: 1,
      name: 'MacBook Pro 2020',
      type: 'Laptop',
      status: 'Delivered',
      photo: 'https://via.placeholder.com/100', // Placeholder image URL
    },
    {
      id: 2,
      name: 'iPhone 12',
      type: 'Smartphone',
      status: 'In Transit',
      photo: 'https://via.placeholder.com/100', // Placeholder image URL
    },
    {
      id: 3,
      name: 'iPad Air',
      type: 'Tablet',
      status: 'Pending',
      photo: 'https://via.placeholder.com/100', // Placeholder image URL
    },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome, {user ? user.name : 'Guest'}</h2>
      {user ? (
        <>
          <h3>Your Donations</h3>
          {devices.length > 0 ? (
            <ul>
              {devices.map((device) => (
                <li key={device.id}>
                  <div className="device-info">
                    <img src={device.photo} alt={device.name} className="device-photo" />
                    <div className="device-details">
                      <p>{device.name} - {device.type}</p>
                      <p>Status: {device.status}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No donations yet. Start by donating a device!</p>
          )}
        </>
      ) : (
        <p>
          Please <Link to="/auth">login</Link> to view your donations.
        </p>
      )}
    </div>
  );
};

export default Dashboard;