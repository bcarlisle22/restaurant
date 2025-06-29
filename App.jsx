import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import DishCard from './components/DishCard'
// import Dishes from './components/Dishes'

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Hero />
      <Navbar />
      {/* <DishCard /> */}
      {/* <Dishes /> */}
    </main>
  )
}

export default App