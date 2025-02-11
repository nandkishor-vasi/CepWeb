// pages/Dashboard.js
const Dashboard = ({ user, devices }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {user ? user.name : 'Guest'}</h2>
      <h3>Your Donations</h3>
      {devices.length > 0 ? (
        <ul>
          {devices.map((device) => (
            <li key={device.id}>
              <p>{device.name} - {device.type}</p>
              <p>Status: {device.status}</p>
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