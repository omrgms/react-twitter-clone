import React from 'react'

const UserBox = () => {
  return (
    <div className='flex items-center justify-between mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
        <img src="https://pbs.twimg.com/profile_images/1532873382504673282/lHhXcP88_400x400.jpg" alt="profile" className='w-11 h-11 rounded-full' />
        <div className='flex flex-col mr-28'>
            <span className='font-bold text-md text-black ml-2' >gümüş</span>
            <span className='text-sm text-gray-dark ml-2'>@omrgms </span>
        </div>
        
        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full '/>
            <div className='w-1 h-1 bg-gray-900 '/>
            <div className='w-1 h-1 bg-gray-900 '/>
        </div>
    </div>
  )
}

export default UserBox