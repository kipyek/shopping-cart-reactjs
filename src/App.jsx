import React from 'react'
import { Routes,Route } from 'react-router'
import HomePage from './pages/home/page'
import NotFoundPage from './pages/NotFound/page'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    </>
  
  )
}

export default App