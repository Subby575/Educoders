import React from 'react'
import Card from '@/app/Components/Card'
import Bar  from '@/app/Comps/Bar'
import Line  from '@/app/Comps/Line'
import Pie  from '@/app/Comps/Pie'
import Float  from '@/app/Comps/Float'
import Image from 'next/image'
import Perf from '@/../public/performance.jpg'
import Link from 'next/link'
import JEE from '@/../public/Jee.png'
export default function page() {
  return (
    <>
   
    {/* <strong><h1 className='text-3xl'>Student Dashboard</h1></strong> */}
  
    <Card/>

   
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Study Plan</h2>
     

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. .</p>
    </div>
    {/* <!-- text - end --> */}

    <div class="grid gap-6 sm:grid-cols-2">
      {/* <!-- product - start --> */}
      {/* <!-- product - end -->

<!-- product - start --> */}
      <Link href="/Plan" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <Image src={JEE} loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">JEE2023</span>
          <span class="text-lg font-semibold text-white lg:text-xl">Physics</span>
        </div>
      </Link>
<Float/>
      {/* <!-- product - end --> */}
    </div>
  </div>
</div>
   

    <h1 class=" my-8 mb-8 text-3xl text-center font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Analytics</h1>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <strong><p className='text-2xl'>Performance</p> </strong>
      <p>(Last 3 Test)</p>
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
      {/* <!-- image - start --> */} 
      <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <Image src={Perf} loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
      </div>
      {/* <!-- image - end --> */}

      {/* <!-- content - start --> */}
    <Bar/>
      
      {/* <!-- content - end --> */}
    </div>
  </div>
</div>

{/* Bar Completed */}

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
        <Line/>
        </div>
      </div>

      <div class="md:pt-8">
        <p class="text-center font-bold text-indigo-500 md:text-left">All About</p>
        
        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Consistency</h1>
        <ul>
        <li>Day 1 :50%</li>
        <li>Day 2: 30%</li>
        <li>Day 3: 80%</li>
        <li>Day 4: 20%</li>
        <li>Day 5: 90%</li>
        <li>Day 6: 50%</li>
        <li>Day 7: 60%</li>
       
        </ul>

       

       

      </div>
    </div>
  </div>
</div>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mx-auto flex max-w-xl flex-col items-center text-center">

      <h1 class="mb-8 text-3xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">Chapters Readed</h1>
      <Pie/>
      
    </div>
  </div>
</div>
   
  
    </>
  )
}
