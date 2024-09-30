import React, { useId } from 'react'

function Select({
    options=[],
    label,
    className="",
    ...props 
},ref) {
    const id = useId()
  return (
    <div className='w-full'>{
        label && <label htmlFor={id} className={className}>{label}</label>
    }
    <select {...props} id={id} ref={ref} className="w-full px-3 bg-white">

    {
        options?.map((option)=>(
            <option key={option}>
                {option}
            </option>
        ))
    }
    </select>
    
    </div>
  )
}

export default React.forwardRef(Select)