import React from 'react'
import Bar  from '@/app/Comps/Bar'
import Line  from '@/app/Comps/Line'
import Pie  from '@/app/Comps/Pie'
import Stack  from '@/app/Comps/Stack'
export default function Analyt() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Statistics</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* <!-- text - end --> */}

    <div class="grid gap-6 sm:grid-cols-2">
      {/* <!-- product - start --> */}
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg  p-4 shadow-lg">
        <Bar/>

        <div class="pointer-events-none absolute inset-0 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-500 font-bold">Performance</span>
          <span class="text-lg font-semibold text-gray-400 lg:text-xl">(Last 3 test)</span>
        </div>
      </a>
      {/* <!-- product - end -->

      <!-- product - start --> */}
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg  p-4 shadow-lg">
        <Line/>

        <div class="pointer-events-none absolute inset-0  via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-600 font-bold">Consistency</span>
          <span class="text-lg font-semibold text-gray-400 lg:text-xl">(week)</span>
        </div>
      </a>
      {/* <!-- product - end --> */}
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg  p-4 shadow-lg">
        <Pie/>

        <div class="pointer-events-none absolute inset-0  via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-600 font-bold">Chapters</span>
          <span class="text-lg font-semibold text-gray-400 lg:text-xl">Completed</span>
        </div>
      </a>
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg  p-4 shadow-lg">
        <Stack/>

        <div class="pointer-events-none absolute inset-0  via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-600 font-bold">Subject</span>
          <span class="text-lg font-semibold text-gray-400 lg:text-xl">Growth</span>
        </div>
      </a>
    </div>
  </div>
</div>
  )
}
