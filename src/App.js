import React, { useEffect} from 'react'
import { Footer, Navbar, Sidebar, ThemeSettings } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from './contexts/ContextProvider'
import { Ecommerce, Orders, Employees, Customers, Calendar, Kanban, Editor, ColorPicker, Line, Pie, StackedChart, Area, Bar, ColorMapping, Financial, Pyramid } from './pages'


export const App = () => {
  const { currentColor, setCurrentColor, currentMode, setCurrentMode, activeMenu, themeSettings, setThemeSettings } = useStateContext()
  
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode')
    const currentThemeMode = localStorage.getItem('themeMode')
    if( currentThemeColor, currentThemeMode) {
      setCurrentColor(currentThemeColor)
      setCurrentMode(currentThemeMode)
    }
  }, [])

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex:'' }}>
            <TooltipComponent
            content='Settings'
            position='Top'
            >
              <button
              type='button'
              onClick={() => setThemeSettings(true)}
              style={{ backgroundColor:currentColor, borderRadius:'50%'}}
              className='text-3xl text-white p-3 drop-shadow-xl hover:bg-light-gray'
              >
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-10">
              <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar/>
            </div>
          )}
          <div
          className={
            activeMenu
            ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full'
            : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
          }
          > 
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
            <div>
              {themeSettings  && <ThemeSettings/>}

              <Routes>
                {/* dashboard */}
                <Route path='/' element={<Ecommerce/>} />
                <Route path='/ecommerce' element={<Ecommerce/>} />
                <Route path='/orders' element={<Orders/>} />
                <Route path='/employees' element={<Employees/>} />
                <Route path='/customers' element={<Customers/>} />
                {/* App */}
                <Route path='/calendar' element={<Calendar/>} />
                <Route path='/kanban' element={<Kanban/>} />
                <Route path='/editor' element={<Editor/>} />
                <Route path='/color-picker' element={<ColorPicker/>} />
                {/* Charts */}
                <Route path='/line' element={<Line/>} />
                <Route path='/pie' element={<Pie/>} />
                <Route path='/stacked' element={<StackedChart/>} />
                <Route path='/area' element={<Area/>} />
                <Route path='/bar' element={<Bar/>} />
                <Route path='/color-mapping' element={<ColorMapping/>} />
                <Route path='/financial' element={<Financial/>} />
                <Route path='/pyramid' element={<Pyramid/>} />
              </Routes>
            </div>
            <Footer/>
          </div>
        </div>
        </BrowserRouter>
    </div>
  )
}
