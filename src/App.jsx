import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<h1>Hello</h1>}/> */}
        <Route path='/' element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App