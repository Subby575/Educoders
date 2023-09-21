import React from 'react'
import Link from 'next/link'
export default function StuNavbar() {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Educoders</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href='/notes' class="mr-5 hover:text-white">Notes</Link>
        <Link href='/Doubts' class="mr-5 hover:text-white">Doubt</Link>
        <Link href='/Classroom' class="mr-5 hover:text-white">Class</Link>
        
      </nav>
      <Link href='/profile'><button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">S
    </button></Link>

    </div>
    </header>
  )
}
