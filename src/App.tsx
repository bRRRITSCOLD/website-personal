import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from './components/AppBar/AppBar'

function App() {
  return (
    <>
    
    <div className='absolute flex flex-row justify-end w-[100vw] z-[99999]'>
        <p className='font-bold text-5xl'>
         BLAINE
        </p>
        <p className='text-5xl'>
         RICHARDSON
        </p>
      </div>
    <div className='flex flex-col'>
      <div className='top-0 flex flex-row justify-center h-[100vh] items-center'>
        <p className='text-3xl font-semibold active:text-gray-500 active:translate-y-[0px] hover:translate-y-[-3px] cursor-pointer'>
         ABOUT
        </p>
        <div className="p-5" />
        <p className='text-3xl font-semibold active:text-gray-500 active:translate-y-[0px] hover:translate-y-[-3px] cursor-pointer'>
         CONTACT
        </p>
        <div className="p-5" />
        <p className='text-3xl font-semibold active:text-gray-500 active:translate-y-[0px] hover:translate-y-[-3px] cursor-pointer'>
         RESUME
        </p>
      </div>
    </div>
      </>
  );
}

export default App;
