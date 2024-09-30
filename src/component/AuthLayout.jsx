import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from "./Loader"

export default function Protected({children,authentication=true}) {
    const navigate = useNavigate()
    const [loader,setloader] =  useState(true)
    const authStatus = useSelector(state => state.authReducer.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")

        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setloader(false)
    },[navigate,authStatus,authentication])
  return loader ? <div><Loader/></div>:<div>{children}</div>
  
}

