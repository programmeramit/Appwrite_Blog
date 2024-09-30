import React,{useState,useEffect} from 'react'
import config from './config/config'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login,logout } from './redux/auth'
import Loader from './component/Loader'
import HomePage from './component/HomePage'
function App() {
    const [loading,isloading]  = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        authService.curentUser().then((userdata)=>{
          if(userdata){
            dispatch(login(userdata))
               }
          else{
            dispatch(logout())
          }
          
        }).catch((e)=>console.log(e)).finally(()=>isloading(false))

    },[])



  return loading ? (<Loader/>):(<HomePage/>)
}

export default App