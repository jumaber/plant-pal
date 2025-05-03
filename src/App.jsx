import { useState } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { AddPlantPage } from './pages/AddPlantPage'
import { PlantDetailPage } from './pages/PlantDetailPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path='/add' element={<AddPlantPage />} />
    <Route path='/plant/:id' element={<PlantDetailPage/>} />
   </Routes>
   </>
  )
}

export default App