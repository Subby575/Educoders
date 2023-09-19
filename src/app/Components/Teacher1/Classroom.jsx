import React from 'react'
import Classr from '@/../public/class1.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function Classroom() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Classes</h2>
    </div>
    {/* <!-- text - end --> */}

    <div class="grid gap-6 sm:grid-cols-2">
      {/* <!-- product - start --> */}
      <Link href="/Classroom/12" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <Image src={Classr} loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">Class 12</span>
          <span class="text-lg font-semibold text-white lg:text-xl">2022-2023</span>
        </div>
      </Link>
      {/* <!-- product - end -->

      <!-- product - start --> */}
      <Link href="/Classroom/11" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <Image src={Classr} loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">Class 11</span>
          <span class="text-lg font-semibold text-white lg:text-xl">2022-2023</span>
        </div>
      </Link>
      {/* <!-- product - end --> */}
    </div>
  </div>
</div>
  )
}
