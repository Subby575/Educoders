import React from 'react'
import { Subject12 } from '../lib/Subjects'
import { Subject10 } from '../lib/Subjects'
import Link from 'next/link'
import Image from 'next/image'
import Book from '@/../public/book.jpg'
export default function page() {
  return (
    <>
    
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      {/* <!-- text - start --> */}
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Study Materials</h2>
        <h1 className='text-4xl'>Class 12</h1>
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{}</p>
      </div>
      {/* <!-- text - end --> */}
  
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
        {/* <!-- article - start --> */}
        {
      Subject12.map((e)=>(
        <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
        <p class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
          <Image src={Book} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </p>

        <div class="flex flex-col gap-2 p-4 lg:p-6">
        <span class="text-sm text-gray-400"> Class {e.class}</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{e.subject}</a>
          </h2>

          

          <div>
            <Link href={`/notes/${e.subject}`} class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read Now</Link>
          </div>
        </div>
      </div>
      ))
    }
  
    
        {/* <!-- article - end --> */}
    </div>
    </div>
  </div>
    <div class="bg-white py-6 sm:py-6 lg:py-10">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <h1 className='text-4xl'>Class 10</h1>
      {/* <!-- text - start --> */}
      <div class="mb-10 md:mb-16">
  
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{}</p>
      </div>
      {/* <!-- text - end --> */}
  
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
        {/* <!-- article - start --> */}
        {
      Subject10.map((e)=>(
        <div class="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
        <p class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
          <Image src={Book} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </p>

        <div class="flex flex-col gap-2 p-4 lg:p-6">
        <span class="text-sm text-gray-400"> Class {e.class}</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{e.subject}</a>
          </h2>

          

          <div>
            <Link href={`/notes/${e.subject}`} class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read Now</Link>
            

          </div>
        </div>
      </div>
      ))
    }
  
    
        {/* <!-- article - end --> */}
    </div>
    </div>
  </div>
  </>
  )
}
