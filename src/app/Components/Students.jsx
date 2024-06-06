"use client"
import React from 'react'
import { Student } from '../lib/data'

export default function Students() {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center gap-1 mb-2">
        <div className='flex  '>
    <h1 className='text-white   rounded bg-black py-2 w-1/2'>Group 1</h1>
    <h1 className='text-white rounded bg-black py-2 w-1/2'>Group 2</h1>
    </div>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      
    
      {
        Student.map((e)=>(
            <div key={e} class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          {e.level>500?
          <span class="text-green-400  title-font font-medium">{e.name}</span>
          :<span class="title-font font-medium text-red-400">{e.name}</span>}
          
        </div>
      </div>
        ))
      }
    </div>
  </div>
</section>
  )
}
