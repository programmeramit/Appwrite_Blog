import React from 'react'

function Button({
    children,
    bgColor="#B5B4D9",
    textColor="#F2D5CE",
    className="",
    ...props
}) {
  return (
    <div className={`bg-${bgColor} text-${textColor} ${className} `}  >
    <button type='button'  {...props}>{children}</button>
    </div>
  )
}

export default Button