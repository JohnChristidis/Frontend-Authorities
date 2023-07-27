import React, { useEffect, useState } from 'react';
import '../styles/final.css';
import { ethers } from 'ethers';

const FinalComponent = ({provider, address, privateKey, contractABI, contractAddress, companies}) => {
    const [message, setMessage] = useState({ type: '', id: 10000, text: '' });
    const [comps, setComps] = useState([]);

    useEffect(() => {
  setComps(companies);
}, [companies]);

  const changeLocationStatus = async (id, status) => {

    try {
      if (privateKey) {
        
        console.log(provider);
        console.log(contractABI);
        console.log(contractAddress);

        const wallet = new ethers.Wallet(privateKey, provider);
        const contract = new ethers.Contract(contractAddress, contractABI, wallet);
        const transaction = await contract.changeLocationStatus(id, status);
        setMessage({ type: 'pending', id: id, text: 'Wait for confirmation...' });
        await transaction.wait();
        console.log('Transaction successful');

        setMessage({ type: 'success', id: id, text: 'Transaction confirmed' });
        const counter = await contract.locationCounter();
        const promises = [];

         for (let i = 0; i < counter; i++) {
           promises.push(contract.getLocation(i));
         }

         // Wait for all promises to resolve
         const locations = await Promise.all(promises);

         // Update the state with all the locations
         setComps(locations);
      }
    } catch (error) {
      console.error('Error sending transaction:', error);
      setMessage({ type: 'error', id: id, text: 'Error' });
    }
  };

  return (
    <div className="finalComponentContainer">
    <h2 className="heading">Companies</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company ID</th>
            <th>Status</th>
            <th>NoC</th>
            <th>NoC per user</th>
          </tr>
        </thead>
        <tbody>
        {comps.map((company, index) => {
          return(
          <tr key={index}>
            <td>{company[0].toNumber()}</td>
            <td>{company[1]}</td>
            <td>{company[2].toNumber()}</td>
            {company[3] === 0 && (
              <td>
                Not enough complaints
              </td>
            )}

            {company[3] === 1 && message.type === "pending" && message.id === company[0].toNumber() && (
              <td>
                {message.text}
              </td>
            )}
            {company[3] === 1 && message.type === "success" && message.id === company[0].toNumber() && (
              <td>
                {message.text}
              </td>
            )}
            {company[3] === 1 && message.type === "error" && message.id === company[0].toNumber() && (
              <td>
                {message.text}
              </td>
            )}

            {company[3] === 1  && message.id !== company[0].toNumber() && (
              <td>
                <button
                  className="redButton"
                  onClick={() => changeLocationStatus (company[0].toNumber(), 2)}
                >Dishonest</button>
                <button
                  className="blueButton"
                  onClick={() => changeLocationStatus (company[0].toNumber(), 3)}
                >Honest</button>
              </td>
            )}
            {company[3] === 2 && (
              <td>
                Dishonest
              </td>
            )}
            {company[3] === 3 && (
              <td>
                Honest
              </td>
            )}
            <td>{company[4].toNumber()}</td>
            <td>{company[5].toNumber()}</td>
          </tr>
        );
        })}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default FinalComponent;
