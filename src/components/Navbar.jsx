import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.';

const NavButton = ({title, customFunc, icon, color, dotColor}) => {
    return (
    <TooltipComponent content={title} position='BottomCenter' cssClass='my-tooltip'>
      <button
       type='button'
       onClick={() => customFunc()}
       style={{ color }}
       className="relative text-xl rounded-full p-3 hover:bg-light-gray"
       >

       <span
       style={{background: dotColor }}
       className="absolute inline-flex rounded-full h-2 w-2 top-2 right-2"
       >
       </span>
       {icon}
      </button>
    </TooltipComponent>
    )
}

const Navbar = () => {
   const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext()
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth)

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
      
    }, [])

    useEffect(() => {
      if (screenSize <= 900) {
        setActiveMenu(false)
      } else {
        setActiveMenu(true)
      }
    }, [screenSize])

    const handleActiveMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className='flex justify-between p-2 md:mr-6 md-ml-6 relative'>

        <NavButton customFunc={handleActiveMenu} title='Menu'  icon={<AiOutlineMenu/>} color={currentColor} />
        <div className="flex">
            <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart/>} />
            <NavButton title="Chat" dotColor={'#03C9D7'} customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft/>} />
            <NavButton title="Notification" dotColor={'rgb(254, 201, 15)'} customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line/>} />
            <TooltipComponent content={'Profile'} position={'BottomCenter'}>
                <div
                className='flex item-center gap-2 cursor-pointer px-2 py-1 hover:bg-light-gray rounded-lg'
                onClick={() => handleClick('userProfile')}
                >
                    <img 
                    className='rounded-full w-8 h-8'
                    src={avatar}
                    alt="user-profile" 
                    />
                    <p>
                       <span className='text-gray-400 text-14'>Hi,</span>
                       <span className='text-gray-400 text-14 ml-1 font-bold'>Michael</span>
                       <MdKeyboardArrowDown className='text-gray-400 text-14'/>
                    </p>
                </div>
            </TooltipComponent>
            { isClicked.notification && <Notification/> }
            { isClicked.chat && <Chat/> }
            { isClicked.cart && <Cart/> }
            { isClicked.userProfile && <UserProfile/> }
        </div>
    </div>
  )
}

export default Navbar