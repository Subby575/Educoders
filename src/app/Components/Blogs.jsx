import React from 'react'
import Link from 'next/link'
import { blog } from '../lib/blog'
import blog1 from '@/../public/blog1.jpg'
import Image from 'next/image'
export default function Blogs() {

  return (

    <>

      {
        blog.map((e) => (
          <div key={e.author}  class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
              {/* <!-- image - start --> */}
              <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                <Image src={blog1} loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
              </div>
              {/* <!-- image - end -->
        
              <!-- content - start --> */}
              <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
               <Link href={`/blogs/${e.title}`}> <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">{e.title}</h2></Link>
        
                <p class="mb-8 max-w-md text-gray-600">{e.desc}.</p>
        
                <div class="mt-auto">
                  <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">{e.author}</a>
                </div>
              </div>
              {/* <!-- content - end --> */}
            </div>
          </div>
        </div>
        ))
      }


    </>

  )
}
