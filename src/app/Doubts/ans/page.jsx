import React from 'react'
import { PDoubt } from '@/app/lib/doubt'
import Divider from '@mui/material/Divider';
import Solve from "@/../public/solve.jpg"
import Image from 'next/image';
export default function page() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h1 className='m-3 mb-8 text-3xl'>Solve the doubts</h1>
        <Image className='h-2 w-1000' src={Solve}/>
        <Divider/>
      {/* <!-- quote - start --> */}
      {
        PDoubt.map((e)=>(
            <>
            <div class="flex flex-col items-left gap-18 md:gap-3">
        {/* <a href="#" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
        </a> */}
  
        <div class=" text-red-600 lg:text-lg">{e.question}</div>
  
        <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
            <div>
          <p className='text-l'>{e.subject}</p>
          <p>{e.date}</p>
            </div>
          <div>
            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">{e.author}</p>
            <button class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Answer</button>
          </div>
        </div>
      </div>
      <Divider/>
     </>
        ))
      }
      
      {/* <!-- quote - end --> */}
    </div>
  </div>
  )
}
