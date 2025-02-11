import { useState } from 'react';

const DeviceForm = ({ onSubmit }) => {
  const [deviceData, setDeviceData] = useState({
    name: '',
    type: 'laptop',
    condition: 'good',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeviceData({ ...deviceData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(deviceData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Device Name:
        <input
          type="text"
          name="name"
          value={deviceData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Device Type:
        <select
          name="type"
          value={deviceData.type}
          onChange={handleChange}
          required
        >
          <option value="laptop">Laptop</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>
      </label>
      <label>
        Condition:
        <select
          name="condition"
          value={deviceData.condition}
          onChange={handleChange}
          required
        >
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
        </select>
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={deviceData.description}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit Donation</button>
    </form>
  );
};

export default DeviceForm;