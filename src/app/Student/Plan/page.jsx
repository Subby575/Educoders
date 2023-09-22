import React from 'react'
import Float from '@/app/Comps/Float'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import JEE from "@/../public/Jee.png";
export default function page() {
  return (
    <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}
    <div class="grid gap-6 sm:grid-cols-2">
    {/* <!-- product - start --> */}
    {/* <!-- product - end -->

<!-- product - start --> */}
    <Link
      href="/Student/Plan/JEE"
      class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
    >
      <Image
        src={JEE}
        loading="lazy"
        alt="Photo by Fakurian Design"
        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />

      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      <div class="relative flex flex-col">
        <span class="text-gray-300">JEE2023</span>
        <span class="text-lg font-semibold text-white lg:text-xl">
          Physics
        </span>
      </div>
    </Link>
    <Float />
    {/* <!-- product - end --> */}
  </div>
  </div>
  </main>
  )
}
