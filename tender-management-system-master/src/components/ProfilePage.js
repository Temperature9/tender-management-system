// ContractorProfile.js
import React, { useState } from 'react';
import './ContractorProfile.css'; // Import the CSS file

const ContractorProfile = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [paymentDetails, setPaymentDetails] = useState({
    bankAccount: '',
    paypal: '',
  });

  const [workerList, setWorkerList] = useState([]);
  const [newWorker, setNewWorker] = useState({ name: '', aadharNumber: '' });
  const [isAddWorkerPopupOpen, setAddWorkerPopupOpen] = useState(false);

  const handleUserDetailsChange = (field, value) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handlePaymentDetailsChange = (field, value) => {
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleAddWorker = () => {
    if (newWorker.name && newWorker.aadharNumber) {
      setWorkerList((prevList) => [...prevList, { ...newWorker }]);
      setNewWorker({ name: '', aadharNumber: '' });
      setAddWorkerPopupOpen(false);
    }
  };

  const saveProfile = () => {
    // Logic to save profile details
    console.log('User details saved:', userDetails);
    console.log('Payment details saved:', paymentDetails);
    console.log('Worker list saved:', workerList);
  };
  return (
    <div className="profile-container">
      <h2>Contractor Profile</h2>

      <section className="profile-section">
        <h3>Personal Information</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="First Name"
            value={userDetails.firstName}
            onChange={(e) => handleUserDetailsChange('firstName', e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Last Name"
            value={userDetails.lastName}
            onChange={(e) => handleUserDetailsChange('lastName', e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) => handleUserDetailsChange('email', e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Aadhar Number"
            value={userDetails.aadharNumber}
            onChange={(e) => handleUserDetailsChange('aadharNumber', e.target.value)}
          />
        </div>
      </section>

      <section className="profile-section">
        <h3>Payment Information</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="Bank Account"
            value={paymentDetails.bankAccount}
            onChange={(e) => handlePaymentDetailsChange('bankAccount', e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="PayPal"
            value={paymentDetails.paypal}
            onChange={(e) => handlePaymentDetailsChange('paypal', e.target.value)}
          />
        </div>
      </section>
      <section className="profile-section">
        <h3>Workers</h3>
        <div className="worker-list">
          {workerList.map((worker, index) => (
            <div key={index} className="worker-item">
              <p>{worker.name}</p>
              <p>{worker.aadharNumber}</p>
            </div>
          ))}
        </div>
        <button className="add-worker-button" onClick={() => setAddWorkerPopupOpen(true)}>
          Add Worker
        </button>

        {/* Add Worker Popup */}
        {isAddWorkerPopupOpen && (
          <div className="add-worker-popup">
            <input
              type="text"
              placeholder="Worker Name"
              value={newWorker.name}
              onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Aadhar Number"
              value={newWorker.aadharNumber}
              onChange={(e) => setNewWorker({ ...newWorker, aadharNumber: e.target.value })}
            />
            <button className="add-worker-popup-button" onClick={handleAddWorker}>
              Add
            </button>
            <button className="add-worker-popup-button" onClick={() => setAddWorkerPopupOpen(false)}>
              Cancel
            </button>
          </div>
        )}
      </section>

      <button className="save-button" onClick={saveProfile}>
        Save Profile
      </button>
    </div>
  );
};

export default ContractorProfile;