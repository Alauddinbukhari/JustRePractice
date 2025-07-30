import { useState } from 'react'
import ScrollIndicator from './components/index.jsx'
import './App.css'

function App() {


  return (
    <>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  )
}

export default App
