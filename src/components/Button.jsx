import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({ color, bgColor, icon, text, borderRadius, bgHoverColor, size, width }) => {
    const { setIsClicked, initialState } = useStateContext()
  return (
    <button
    type='button'
    onClick={() => setIsClicked(initialState)}
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
       { icon } { text } 
    </button>
  )
}

export default Button