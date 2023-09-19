import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      {/* <!-- text - start --> */}
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Ask your Doubt</h2>
  
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      {/* <!-- text - end -->
  
      <!-- form - start --> */}
      <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        
  
        <div class="sm:col-span-2">
          <label for="company" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Class*</label>
          <input name="company" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div class="sm:col-span-2">
          <label for="subject" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Subject*</label>
          <input name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div class="sm:col-span-2">
          <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Query*</label>
          <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
        </div>
  
        <div class="flex items-center justify-between sm:col-span-2">
          <Link href='/Doubts'><button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button></Link>
  
          <span class="text-sm text-gray-500">*Required</span>
        </div>
  
        
      </form>
      {/* <!-- form - end --> */}
    </div>
  </div>
  )
}
