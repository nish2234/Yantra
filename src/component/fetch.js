import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const TokenDataFetcher = () => {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [urBalance, seturBalance] = useState('');
  const [connectedWallet, setConnectedWallet] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');
  const [contractAddress,setcontractAddress]=useState('');
//   const contractAddress = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB';
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
    <div>
        <input
          type="text"
        //   value={recipientAddress}
          onChange={(e) => setcontractAddress(e.target.value)}
        />
        <button onClick={fetchTokenData}>Fetch</button>
      <h2>Token Data:</h2>
      <p>Name: {tokenName}</p>
      <p>Symbol: {tokenSymbol}</p>
      <p>Total Supply: {totalSupply}</p>
      <p>Connected Wallet: {connectedWallet}</p>
      <p>Balance: {urBalance}</p>
      <button onClick={fetchTokenData}>Refresh</button>

      <h2>Send Token:</h2>
      <div>
        <label>Recipient Address:</label>
        <input
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Amount to Send:</label>
        <input
          type="text"
          value={amountToSend}
          onChange={(e) => setAmountToSend(e.target.value)}
        />
      </div>
      <button onClick={handleSendToken}>Send</button>
    </div>
  );
};

export default TokenDataFetcher;
