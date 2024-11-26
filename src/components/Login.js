import React, { useState } from 'react'

const Login = () => {
    const [alreadyRegistered, setalreadyregisterd] = useState(true)

    const toggleSignin_up = ()=>{
        setalreadyregisterd(!alreadyRegistered)
    }
  return (
    <div>
      <div className='absolute' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg" alt="bg_image"/>
       </div>
       <div className='bg-black absolute block w-4/12 h-full text-white p-2 mt-60 ml-96 opacity-80 pt-6 pb-16 rounded-lg'>
       <form className='grid'>
        <h1 className='mx-16 my-2 text-3xl font-bold py-2'>{alreadyRegistered?"Sign In":"Sign Up"}</h1>
        {!alreadyRegistered &&  <input type="text" placeholder="Full Name" className='mx-16 my-2 bg-slate-800 p-4 rounded-lg'/>}
        <input type="text" placeholder="Username" className='mx-16 my-2 bg-slate-900 p-4 rounded-lg'/>
        <input type= "password" placeholder='Password' className='mx-16 my-2 bg-slate-900 p-4 rounded-lg'/>
        <button className='mx-16 my-2 bg-red-700 p-2 rounded-lg'> Sign In</button>
        <p className='mx-16 my-2 p-2 cursor-pointer' onClick={toggleSignin_up}>{alreadyRegistered?"New to Netflix? Sign up now.":"Already Registerd? Sign In."}</p>
       </form>
       </div>
      
        

    </div>
  )
}

export default Login