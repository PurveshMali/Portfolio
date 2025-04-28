import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './pages/Page1'
import CursorTrail from './animations/CursorTrail'
import Page2 from './pages/Page2'

const App = () => {
  return (
    <div className='bg-black h-screen w-full text-white border-1 border-gray-400'>
      <CursorTrail />
      <Navbar />
      <Page1 />
      <Page2 />
    </div>
  )
}

export default App
