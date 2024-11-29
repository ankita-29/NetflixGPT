import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from "../userSlice"

const useHeaderHook=()=>{

    const dispatch= useDispatch()
    const navigate= useNavigate()
    useEffect(()=>{
      const unsubsribe=onAuthStateChanged(auth, (user) => {
        if (user) {
        const {accessToken, displayName,email,uid}=user
          dispatch(addUser({accessToken, displayName,email,uid}))
          navigate('/browse')
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });
      return ()=>unsubsribe()
    },[])
}

export default useHeaderHook