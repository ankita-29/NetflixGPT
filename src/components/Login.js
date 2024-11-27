import React, { useRef, useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../utils/firebase.js'
const Login = () => {
    const [isSignInpage, setToggleSignInpage] = useState(true)
    const [errormsg, seterrormsg] = useState("")
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const toggleSignin_up = ()=>{
      setToggleSignInpage(!isSignInpage)
    }
    const handleSubmit=(e)=>{
      seterrormsg("")
      e.preventDefault()
      console.log(email)
      console.log("Ankitagup")
      if(isSignInpage)//isSignInpage
      {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorMessage)
        });

      }
      else
      {
        console.log("inside signup page")
           //signuppage
           createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          // Signed up 
            const user = userCredential.user;
            console.log(user)
          // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorMessage)
            console.log(error)
            // ..
          });
              }


   
    }
  return (
    <div className='justify-center'>
      <div className='absolute h-full w-full' >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg" alt="bg_image" className="h-full w-full"/>
       </div>
       <form className='bg-black absolute block min-w-32 w-3/12  text-white p-2 justify-self-center mt-60 ml-96 h-2/3  opacity-80 pt-6 pb-16 rounded-lg'>
        <h1 className='mx-16 my-2 text-3xl font-bold py-2'>{isSignInpage?"Sign In":"Sign Up"}</h1>
        {!isSignInpage &&  <input type="text" placeholder="Full Name" className='mx-16 my-2 bg-slate-800 py-4 px-2 rounded-lg'/>}
        <input ref={email} type="text" placeholder="EMail" className='mx-16 my-2 bg-slate-900 p-4 rounded-lg'/>
        <input ref={password} type= "password" placeholder='Password' className='mx-16 my-2 bg-slate-900 p-4 rounded-lg'/>
        <p className='mx-16 my-2 text-red-600 text-sm'>{errormsg}</p>
        <button className='mx-16 my-2 bg-red-700 p-2 rounded-lg' onClick={(e)=>{handleSubmit(e)}}>{isSignInpage? "Sign In": "Sign Up"}</button>
        
        <p className='mx-16 my-2 p-2 cursor-pointer' onClick={toggleSignin_up}>{isSignInpage?"New to Netflix? Sign up now.":"Already Registerd? Sign In."}</p>
       </form>
      
        

    </div>
  )
}

export default Login