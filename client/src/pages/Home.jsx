import React from 'react'

export default function Home() {
  return (
    <div className='bg-background min-h-screen text-textMain'>
      <header className='flex items-center justify-between w-full p-8 m-auto bg-textMain text-background'>
        <h2 className='text-2xl'>Village Stay</h2>
        <nav className='flex items-center space-x-4'>
          <ul className='flex space-x-4 gap-3 text-xl'>
            <li><a href="/Explore">Explore</a></li>
            <li><a href="/SignIn">SignIn</a></li>
          </ul>
          </nav>
      
      </header>
      <div className='flex flex-col text-lg items-center m-20 p-10 bg-textMain text-background rounded-lg shadow-lg w-4/5 mx-auto'>
        <h1 className='text-5xl font-bold'>Welcome to the Village Stay</h1>
      <p className='text-2xl font-semibold'>Your home away from home.</p>
      <p>Explore our beautiful village and find your perfect stay.</p>
      <p>Book your stay today and experience the charm of village life.</p>
      <button className='px-4 py-2 bg-primary text-background rounded m-3'><a href="/SignIn">Book Now</a></button>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-10 p-10 ml-0 mb-5 bg-secondary'>
        <img src="/village1.jpg" alt="" className='w-80 h-64 object-cover rounded-lg shadow-lg' />
        <img src="/village2.jpg" alt="" className='w-80 h-64 object-cover rounded-lg shadow-lg' />
        <img src="/village3.jpg" alt="" className='w-80 h-64 object-cover rounded-lg shadow-lg' />
        <img src="/village4.jpg" alt="" className='w-80 h-64 object-cover rounded-lg shadow-lg' />
      </div>

      <div className='flex flex-col text-lg items-center justify-center m-10 p-8 bg-background mb-5'>
        <h2 className='text-xl'>About Us</h2>
        <p>We are a family-run business dedicated to providing the best village stay experience.</p>
        <p>Our goal is to make you feel at home while you explore the beauty of our village.</p>
        <p>Contact us for more information or to book your stay.</p>
      </div>
      
      <footer className='flex items-center justify-center w-full text-xl font-semibold p-8 bg-textMain text-white'>
        <p>&copy; 2025 Village Stay. All rights reserved.</p>
      </footer>
    </div>
  )
}
