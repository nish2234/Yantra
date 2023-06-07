import React from 'react'
import { useState } from 'react';

function Forms() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState('');
  const [urBalance, seturBalance] = useState('');
  const [connectedWallet, setConnectedWallet] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');
  const [contractAddress,setcontractAddress]=useState('');
  return (
   <>
   <div className="f">
   <div class="form">
      <div class="title">Token Data</div>
      
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder="Fetching address"/>
        
      </div>
      <button type="text" class="submit">Fetch</button>
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
      <button type="text" class="submit">Refresh</button>
    </div>


    <div class="form">
      <div class="title">Send data</div>
     
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Recipients address" />
        
        
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder="Amount to send" />
        
        
      </div>
      
      <button type="text" class="submit">Send</button>
    </div>
   </div>
     
   </>
  )
}

export default Forms
