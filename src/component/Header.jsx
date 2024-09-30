import React from 'react'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from './custom_component/Button'
function Header() {
  const selecter = useSelector((state)=>state.authReducer.status)
  const navigate =  useNavigate()
  console.log(selecter)

  const navItem = [
    {
      name:"Home",
      slug:'/',
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!selecter
    },
    {
      name:"Logout",
      slug:"/login",
      active:selecter
    },
    {
      name:"SignUp",
      slug:"/signup",
      active:!selecter
    },{
      name:'Add Post',
      slug:'/all-post',
      active:selecter
    },
   
  ]

  
  return (
    <div className='flex w-full bg-slate-700 flex-row justify-between p-2 content-center '>
      <ul className='flex flex-row list-none gap-4 p-4 text-base font-mono  text-white'>
      <Button children="Button"  textColor='green' />

      {
        navItem.map((item)=>{

          if(item.active){
        return(
          <Link  to="/">
          <button onClick={()=>navigate(item.slug)}>{item.name}</button>
          </Link>
          )
          
          
      }
            
      
})
      }

      </ul>

      {
        selecter && <LogoutBtn/>

      }


      

    </div>
  )
}

export default Header