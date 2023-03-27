import { createContext, useContext, useState } from "react"
const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile:false,
    notifications:false
}

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Dark')
    const [themeSettings, setThemeSettings] = useState(false)
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)

    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
    }

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
    }

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true })

    return (
        <StateContext.Provider value={{ screenSize, setScreenSize, currentColor, setCurrentColor, currentMode, setCurrentMode, themeSettings, setThemeSettings, activeMenu, setActiveMenu, isClicked, setIsClicked, setColor, setMode, handleClick, initialState }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)