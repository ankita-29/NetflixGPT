import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useHeaderHook from '../utils/customHooks/useHeaderHook';
const Header = () => {
  useHeaderHook()
  const userslice=useSelector((store)=>store.user)
  const handleSignout= ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });

  }
  return (
    <div> 
        <div className='absolute bg-gradient-to-b from-black z-10 w-full flex justify-between'>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' className='w-52 m-4 '/>
            <div className='flex'>
            <p className='text-white p-1 mt-5 pt-2 m-2'>{userslice?.displayName}</p>
            <button className='bg-red-600 h-12 mt-4 rounded-md text-white p-1 mr-2' onClick={handleSignout}>SignOut</button>
            </div>
        </div>
    </div>
  )
}

export default Header