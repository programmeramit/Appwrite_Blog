import React from 'react'
import { useId } from 'react'
const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props 
},ref){
    const id = useId()
    return(
        <div>
            {label && <label htmlFor={id}>{label}</label>}

            <input type={type} className={`${className}`} ref={ref}  {...props} id={id}/>
        </div>
    )
})

export default Input