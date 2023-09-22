"use client"
import React from 'react'
import Link from 'next/link'
import Auto from './Auto'
import ModalShow from './Modal'
import ModalShow1 from './Modal2'
import ModalShow3 from './Modal3'
export default function Schedule() {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Date</span>
          <span class="mt-1 text-gray-500 text-sm">12 Sept 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Day 1: Class Lesson</h2>
          <p class="leading-relaxed"></p>
          <a  class="text-indigo-500 inline-flex items-center mt-4">
            <Auto/>
            {/* <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg> */}
          </a>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Date</span>
          <span class="mt-1 text-gray-500 text-sm">13 Sept 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Day 2: Test Day</h2>
          <p class="leading-relaxed"></p>
          {/* <button class="text-indigo-500 inline-flex items-center mt-4">Submit
          </button> */}
           <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
        <input placeholder="Enter Test Link" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit</button>
      </form>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Date</span>
          <span class="text-sm text-gray-500">14 Sept 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Day 3: Mentoring</h2>
          <p class="leading-relaxed"><ModalShow/></p>
          <Link href='/Leaderboard' class="text-indigo-500 inline-flex items-center mt-4">Leaderboard
            
          </Link>
        </div>
      </div>
     
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Date</span>
          <span class="text-sm text-gray-500">15 Sept 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Day 4: Task </h2>
          <p class="leading-relaxed"><ModalShow1/></p>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">Date</span>
          <span class="text-sm text-gray-500">16 Sept 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Day 5:Group Formation </h2>
          <p class="leading-relaxed">
            <ModalShow3/><form class="m-3 flex w-full max-w-md gap-2 sm:mb-5">
        <input placeholder="Assignment Link" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Submit</button>
      </form></p>
          <a class="text-indigo-500 inline-flex items-center mt-4">
            
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
