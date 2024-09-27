import React,{useState,useEffect} from 'react'
import config from './config/config'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login,logout } from './redux/auth'
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



  return loading ? (<div>loading</div>):(<h2>you are not logged in</h2>)
}

export default App