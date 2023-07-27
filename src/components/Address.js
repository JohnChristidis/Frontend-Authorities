import React, { useState } from 'react';
import '../styles/Address.css';


const AddressComponent = ({ updateAccountList, accounts }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleSave = () => {
    const newAccount = { name, address, privateKey };
    const updatedAccounts = [...accounts, newAccount];
    updateAccountList(updatedAccounts);
    setName('');
    setAddress('');
    setPrivateKey('');
  };

  const handleReset = () => {
    updateAccountList([]);
    setName('');
    setAddress('');
    setPrivateKey('');
  };

  return (
    <div className="addressContainer">
      <div className="inputGroup">
        <h2 className="heading">Enter New Account</h2>
        <div className="buttonContainer">
          <button className="button" onClick={handleSave}>
            Save
          </button>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="inputContainer">
        <input
          className="input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="input"
          placeholder="Private Key"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
          type="password"
        />
      </div>
    </div>
  );
};

export default AddressComponent;
