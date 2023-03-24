import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { Button } from '.'
import { MdOutlineCancel } from 'react-icons/md'
import { chatData } from '../data/dummy'

const Notification = () => {
    const  { currentColor } = useStateContext()
  return (
    <div className='nav-item absolute right-5 md:rigth-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg md:w-96'>
        <div className="flex items-center justify-between">
            <div className="flex gap-3">
                <p className='font-semibold text-lg dark:text-gray-200'>Notifications</p>
                <button type='button' className='text-white text-xs rounded p-1 px-2 bg-orange-theme'> 5 New</button>
            </div>
            <Button icon={<MdOutlineCancel/>} color='rgb(153, 171, 180)' bgHoverColor="light-gray" size='2xl' borderRadius='50%'/>
        </div>
        <div className="mt-5">
            {chatData.map((item, index) => 
            <div key={index} className="flex items-center leading-8 gap-5 boredr-b-1 border-color p-3">
                <img src={item.image} alt={item.message} className='w-10 h-10 rounded-full'/>
                <div>
                    <p className='font-semibold dark:text-gray-200'>{item.message}</p>
                    <p className='text-gray-500 text-sm dark:text-gray-400'>{item.desc}</p>
                </div>
            </div>
            )}
            <div className="mt-5">
                <Button color='white' bgColor={currentColor} text="See all notifications" borderRadius='10px' width='full'/>
            </div>
        </div>
    </div>
  )
}

export default Notification
