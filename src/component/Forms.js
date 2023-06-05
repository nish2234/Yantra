import React from 'react'

function Forms() {
  return (
   <>
   <div className="f">
   <div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder="Name" />
        
        
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder="Email" />
        
        
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder="Password"/>
        
        
      </div>
      <button type="text" class="submit">submit</button>
    </div>
   </div>
     
   </>
  )
}

export default Forms
