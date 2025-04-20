import React from 'react'

const HOME = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center my-10'>Welcome to the Home Page</h1>
      <img src="/images/home.png" alt="Home" className='w-[400px] h-[500px] object-cover' />
      <p className='text-lg text-gray-600 mt-4'>This is the home page of our application. You can find various features and functionalities here.</p>
    </div>
  )
}

export default HOME