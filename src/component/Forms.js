import React from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';

function Forms() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [urBalance, seturBalance] = useState('');
  const [connectedWallet, setConnectedWallet] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');
  const [contractAddress, setcontractAddress] = useState('');

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // Create a new instance of the ERC20 token contract
  const tokenContract = new ethers.Contract(
    contractAddress,
    [
      'function name() view returns (string)',
      'function symbol() view returns (string)',
      'function totalSupply() view returns (uint256)',
      'function balanceOf(address) view returns (uint256)',
      'function transfer(address, uint256) returns (bool)',
    ],
    provider.getSigner()
  );

  const handleSendToken = async () => {
    try {
      // Ensure the recipient address and amount to send are provided
      if (!recipientAddress || !amountToSend) {
        console.error('Recipient address and amount are required');
        return;
      }

      // Convert the amount to a BigNumber
      const amount = ethers.utils.parseUnits(amountToSend);

      // Call the transfer function to send the token to the recipient address
      const tx = await tokenContract.transfer(recipientAddress, amount);

      // Wait for the transaction to be mined
      await tx.wait();

      console.log('Token transfer successful!');
    } catch (error) {
      console.error('Error sending token:', error);
    }
  };

  const fetchTokenData = async () => {
    try {
      // Fetch the token name
      const name = await tokenContract.name();
      setTokenName(name);

      // Fetch the token symbol
      const symbol = await tokenContract.symbol();
      setTokenSymbol(symbol);

      // Fetch the total supply
      const totalSupply = await tokenContract.totalSupply();
      setTotalSupply(totalSupply.toString());

      const address = await provider.getSigner().getAddress();
      setConnectedWallet(address);

      const balance = await tokenContract.balanceOf(address);
      seturBalance(balance.toString());
    } catch (error) {
      console.error('Error fetching token data:', error);
    }
  };


  return (
    <>
      <div className="f">
        <div class="form">
          <div class="title">Token Data</div>

          <div class="input-container ic2">
            <input id="email" class="input" onChange={(e) => setcontractAddress(e.target.value)} type="text"  placeholder="Fetching address" />
          </div>
          <button type="text" onClick={fetchTokenData}  class="submit">Fetch</button>
        </div>

        <div class="form">
          <div class="title">Token Data</div>

          <div class="input-container ic2 x">
            <li>Name - {tokenName}</li>
            <li>Symbol - {tokenSymbol}</li>
            <li>Total Supply - {totalSupply}</li>
            <li>Connected wallet - {connectedWallet}</li>
            <li>Balance - {urBalance}</li>
          </div>
          <br/>
          <button type="text" onClick={fetchTokenData} class="submit">Refresh</button>
        </div>


        <div class="form">
          <div class="title">Send data</div>

          <div class="input-container ic1">
            <input id="firstname" class="input" onChange={(e) => setRecipientAddress(e.target.value)} type="text" placeholder="Recipients address" />

          </div>
          <div class="input-container ic2">
            <input id="lastname" class="input" type="text" onChange={(e) => setAmountToSend(e.target.value)} placeholder="Amount to send" />

          </div>

          <button type="text" onClick={handleSendToken} class="submit">Send</button>
        </div>
      </div>

    </>
  )
}

export default Forms
