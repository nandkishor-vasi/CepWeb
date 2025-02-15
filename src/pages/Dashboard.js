// pages/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ user }) => {
  // Sample device data with photos
  const devices = [
    {
      id: 1,
      name: 'MacBook Pro 2020',
      type: 'Laptop',
      status: 'Delivered',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wyu-aTKFUVa7hc_loFgL_ljosY9_VfqGzQ&s', // Placeholder image URL
    },
    {
      id: 2,
      name: 'iPhone 12',
      type: 'Smartphone',
      status: 'In Transit',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQkFIE5cWIvABTfzNNYdlTIpBZhkpl6OoFQ&s', // Placeholder image URL
    },
    {
      id: 3,
      name: 'iPad Air',
      type: 'Tablet',
      status: 'Pending',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGqD5OnsCXHU3zRZqmxuScG-UWzPhkrN6qw&s', // Placeholder image URL
    },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome, {user ? user.name : 'Guest'}</h2>
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
    </div>
  );
};

export default Dashboard;