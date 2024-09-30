import React from 'react'
import {Button,Input,PostCard,Select} from './custom_component'
import authService from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { login } from '../redux/auth'
function Login() {
    const  navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,seterror] = useState(null)
    const login = async (data)=>{
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.curentUser()
                if(userData){
                    dispatch(login(userData))
                    navigate('/')
                }
            }
        }catch(e){
            console.log(e)
        }

    }
  return (
    <div>

        <form onSubmit={handleSubmit(login)}>
            <Input placeholder="input" {...register("email",{required:true})}/>
            <Input placeholder="input" {...register("password",{required:true})}/>

            <Button>Login</Button>

        </form>
    </div>
  )
}

export default Login