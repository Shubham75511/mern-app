import React from 'react'

export default function Home() {
  return (
    <div className=''>
      <header className='flex items-center justify-between w-full p-4 bg-blue-600 text-white'>
        <h2 className='text-lg'>Village Stay</h2>
        <nav className='flex items-center space-x-4'>
          <ul className='flex space-x-4'>
            <li><a href="/">Home</a></li>
            <li><a href="/Explore">Explore</a></li>
            <li><a href="/SignIn">SignIn</a></li>
          </ul>
          </nav>
      
      </header>
      <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/public/village.jpg)' }}>
        <h1>Welcome to the Village Stay</h1>
      <p>Your home away from home.</p>
      <p>Explore our beautiful village and find your perfect stay.</p>
      <p>Book your stay today and experience the charm of village life.</p>
      <button className='px-4 py-2 bg-blue-600 text-white rounded'>Book Now</button>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-200'>
        <img src="/public/village1.jpg" alt="" />
        <img src="/public/village2.jpg" alt="" />
        <img src="/public/village3.jpg" alt="" />
        <img src="/public/village4.jpg" alt="" />
      </div>
      <footer className='flex items-center justify-center w-full p-4 bg-blue-600 text-white'>
        <p>&copy; 2025 Village Stay. All rights reserved.</p>
      </footer>
    </div>
  )
}
