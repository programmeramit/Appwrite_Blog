import React, { useState } from 'react'
import { Button,Input } from './custom_component'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/auth'
import authService from '../appwrite/auth'

function SignUp() {
    const navigate = useNavigate()
    const [error,seterror] =  useState("")
    const dispatch = useDispatch()
    const {register,handleSubmit} =  useForm()

    const create= async(data)=>{
seterror("")
try{
    const userdata = await authService.createAccount(data)
    if(userdata){
      const userdata =  await authService.curentUser()
      if (userdata) dispatch(login(userdata));
      navigate('/')

    }


}catch(e){

}
    }
  return (
    <div>
      <form onSubmit={handleSubmit(create)}>
        <Input label="Full Name" placeholder="Enter Your Full Name" {...register("name",{required:true})}/>
        <Input placeholder="input" {...register("email",{required:true})}/>
        <Input placeholder="input" {...register("password",{required:true})}/>
        <Button type="submit"></Button>



      </form>
    </div>
  )
}

export default SignUp