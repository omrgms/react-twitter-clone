import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const Widgets = () => {
  return (
    <aside className="w-80">
      
      <div className='flex justify-center bg-gray-200 rounded-full py-3 my-3 outline-none
       focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-base'>
        
        <input type="text" placeholder='Search Twitter' 
        className='bg-gray-200 placeholder-gray-dark bg-transparent focus:outline-none '/>
      
      </div>
      
      <div className='mt-6 '>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'omrrgms'
        }}
        options={{
          height: '200'
        }}   
          /> 
      </div>
    </aside>
  )
}

export default Widgets