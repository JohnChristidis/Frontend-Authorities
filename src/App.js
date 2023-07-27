import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './styles/Header.css';
import './App.css';
import Header from './components/Header';
import AddressComponent from './components/Address';
import AccountListComponent from './components/AccountList';
import FinalComponent from './components/Final';


import { contractABI, contractAddress } from './utils/contract';

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [provider, setProvider] = useState(null);
  const [privateKey, setPrivateKey] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
    const [companies, setCompanies] = useState([]);

  useEffect(() => {
    retrieveAccounts();
  }, []);



  useEffect(() => {
    // Connect to Ethereum provider
    const connectToProvider = async () => {
      try {
        const ethereumProvider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
        setProvider(ethereumProvider);
        console.log(ethereumProvider);
      } catch (error) {
        console.error('Error connecting to provider:', error);
      }
    };
    connectToProvider();
  }, []);

  const retrieveAccounts = async () => {
    try {
      const data = await localStorage.getItem('userData');
      if (data) {
        const parsedData = JSON.parse(data);
        setAccounts(parsedData);
      }
    } catch (error) {
      console.log('Error retrieving accounts:', error);
    }
  };

  const updateAccountList = async (updatedAccounts) => {

    setAccounts(updatedAccounts);

    try {
      await localStorage.setItem('userData', JSON.stringify(updatedAccounts));
    } catch (error) {
      console.log('Error updating account list:', error);
    }
  };

  const activateAccountWholeApp  = async (name, address, privateKey) => {
    setName(name);
    setAddress(address);
    setPrivateKey(privateKey);
    const wallet = new ethers.Wallet(privateKey, provider);
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
    const counter = await contract.locationCounter();
    const promises = [];

     for (let i = 0; i < counter; i++) {
       promises.push(contract.getLocation(i));
     }

    
     const locations = await Promise.all(promises);


     setCompanies(locations);
  };

  return (
    <div className="container">
      <Header />

      <div className="contentContainer">
        <div className="parentComponentContainer">
        <div>
      <AddressComponent
        updateAccountList={updateAccountList}
        accounts={accounts}
      />
      <AccountListComponent
        accounts={accounts}
        provider={provider}
        contractABI={contractABI}
        contractAddress={contractAddress}
        activateAccountWholeApp={activateAccountWholeApp}
      />
      </div>
      <div>
      <FinalComponent
        provider={provider}
        address = {address}
        privateKey = {privateKey}
        contractABI={contractABI}
        contractAddress={contractAddress}
        companies = {companies}
      />
      </div>
      </div>
      </div>
    </div>

  );
};

export default App;
