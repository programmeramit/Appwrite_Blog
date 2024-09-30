import React from 'react'
import database_acces from '../../appwrite/database'
import { Link } from 'react-router-dom'
function PostCard({$id,title,featuredImage}) {

  return (
    <div>
        <Link to={`${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl'>
            <img src={database_acces.getFilePreview(featuredImage)} alt={title} className='w-full h-40 object-cover rounded-t-xl'/>
        </div>
        </Link>
    </div>
  )
}
            
export default PostCard