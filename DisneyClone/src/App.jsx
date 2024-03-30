// import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import ProductionHouse from './components/ProductionHouse';
import Sliders from './components/Sliders';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
      <Sliders/>
      <ProductionHouse/>
    </div>
  )
}

export default App
