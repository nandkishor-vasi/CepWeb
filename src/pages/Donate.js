// pages/Donate.js
import DeviceForm from '../components/DeviceForm';

const Donate = ({ handleDonation }) => {
  return (
    <div className="donate-page">
      <h2>Donate Your Device</h2>
      <DeviceForm onSubmit={handleDonation} />
    </div>
  );
};

export default Donate;