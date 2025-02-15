import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Listings from './pages/Listings';
import DeviceDetails from './pages/DeviceDetails';
import Dashboard from './pages/Dashboard';

const sampleDevices = [
  {
    id: 1,
    name: "MacBook Pro 2019",
    type: "laptop",
    condition: "excellent",
    description: "Lightly used laptop with 16GB RAM",
    status: "available",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
  },
  {
    id: 2,
    name: "iPad Air 4th Gen",
    type: "tablet",
    condition: "good",
    description: "Perfect for online classes",
    status: "reserved",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33"
  }
];

const stats = {
  devicesDonated: 1420,
  beneficiaries: 980,
  eWasteReduced: 35
};

function App() {
  const [devices, setDevices] = useState([]);
  const [stats, setStats] = useState({
    devicesDonated: 0,
    beneficiaries: 0,
    eWasteReduced: 0
  });

  // Fetch devices from Java backend
  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/devices")
  //     .then(response => setDevices(response.data))
  //     .catch(error => console.error("Error fetching devices:", error));

  //   axios.get("http://localhost:8080/api/stats")
  //     .then(response => setStats(response.data))
  //     .catch(error => console.error("Error fetching stats:", error));
  // }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home stats={stats} devices={sampleDevices} />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/listings" element={<Listings devices={devices} />} />
        <Route path="/device/:id" element={<DeviceDetails devices={devices} />} />
        <Route path="/dashboard" element={<Dashboard devices={devices} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
