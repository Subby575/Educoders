import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div class="bg-white lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header class="flex items-center justify-between py-4 md:py-8">
      {/* <!-- logo - start --> */}
      <Link href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        EduCoders
      </Link>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav class="hidden gap-12 lg:flex">
        <Link href="/" class="text-lg font-semibold hover:text-gray-600 transition duration-100 text-indigo-500 active:text-indigo-700">Home</Link>
        <a href="/Doubts/ans" class="inline-flex items-center gap-1 text-lg font-semibold text-gray-600 hover:text-indigo-500">
           Answer Doubts
        </a>
        <Link href="/notes" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Approve Notes</Link>
        <Link href="/blogs" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Blogspace</Link>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
      
      </div>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      {/* <!-- buttons - end --> */}
    </header>

   
  </div>
</div>
  )
}
