import React,{useState} from 'react'
import RTE from './RTE'
import { Button,Input,Select } from './custom_component'
import { useDispatch ,useSelector} from 'react-redux'
import database_acces from '../appwrite/database'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function PostForm({post}) {
    const {register,handleSubmit,watch,setValue,control,getValues}= useForm({
         defaultValues:{
            title:post?.title || '',
            contents:post?.content || '',
            tags:[],
            status:post?.status || '',
            featured_image: post?.featured_image || '',
            
         }
    })
    const navigate = useNavigate()
    const userData = useSelector(state => state.authReducer.userdata)

    const submit = async (data)=>{
        if(post){
            const file =data.image[0] ? database_acces.uploadFile(data.image[0]) : null;
            
            if (file){
                database_acces.deleteFile(post.featured_image)
            }
            const dbPost = await database_acces.update_post(post.$id,{...data,featured_image:file?file.$id:undefined})
            if(dbPost){
              navigate(`/post/${dbPost.$id}`)

            }
        }else{
          const file = await database_acces.uploadFile(data.image[0])
        }
    }
  return (
    <div>PostForm</div>
  )
}

export default PostForm