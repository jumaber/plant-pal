import './App.css'
import { HomePage } from './pages/HomePage'
import { AddPlantPage } from './pages/AddPlantPage'
import { PlantDetailPage } from './pages/PlantDetailPage'
import { Routes, Route } from 'react-router-dom'
import { PageNotFound } from './pages/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPlantPage />} />
        <Route path="/plant/:id" element={<PlantDetailPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App
