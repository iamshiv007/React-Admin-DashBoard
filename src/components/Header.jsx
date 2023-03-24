import React from 'react'

const Header = ({ category, title}) => {
  return (
    <div className='mb-10'>
        <div className="text-lg text-gray-400">{category}</div>
        <div className="text-3xl font-extrabold tracking-tight text-slate-900">
            {title}
        </div>
    </div>
  )
}

export default Header
