// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Listings from './pages/Listings';
import DeviceDetails from './pages/DeviceDetails';
import Dashboard from './pages/Dashboard';

// Sample data
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
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home stats={stats} />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/listings" element={<Listings devices={sampleDevices} />} />
        <Route path="/device/:id" element={<DeviceDetails devices={sampleDevices} />} />
        <Route path="/dashboard" element={<Dashboard devices={sampleDevices} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;