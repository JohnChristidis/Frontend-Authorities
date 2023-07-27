import React, { useState } from 'react';
import '../styles/AccountList.css';
import { ethers } from 'ethers';

const AccountListComponent = ({ accounts, provider, contractABI, contractAddress, activateAccountWholeApp }) => {

  const [activeName, setActiveName] = useState('');


  const activateAccount  = (name, address, privateKey) => {
    console.log(name);
    setActiveName(name);
    activateAccountWholeApp(name, address, privateKey);
  };

  return (
    <div className="accountListContainer">
      <h2 className="heading">Active Account: </h2>
      <h2 className="heading">{activeName} </h2>
      <h2 className="heading">Accounts</h2>
    

      {accounts.map((account, index) => (
        <div key={index} className="accountContainer">
          <div className="card">
            <div className="cardContent">
              <p className="cardName">{account.name}</p>
              <button
                className="reportButton"
                onClick={() => activateAccount (account.name, account.address, account.privateKey)}
              >
                Use
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountListComponent;
