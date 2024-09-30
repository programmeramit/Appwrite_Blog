import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../redux/auth'
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logoutSession().then(()=>{dispatch(logout);alert("Logout")}).catch((e)=>console.log(e))
    }
  return (
    <div><button onClick={logoutHandler} className='inline-block rounded-full p-2 bg-red-400'>Logout</button></div>
  )
}

export default LogoutBtn