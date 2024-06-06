import Schedule from '@/app/Components/Schedule'
import React from 'react'
import Accordion1 from '@/app/Components/Accordion'
const week=["1","2","3","4","5"]
import Link from 'next/link'
export default function page() {

  return (


    <>
    <div class="bg-white pt-6 sm:pt-8 lg:pt-12">
  {/* <!-- banner - start --> */}
  <div class="mx-auto max-w-screen-2xl px-4 pb-4 md:px-8">
    <div class="relative flex flex-wrap rounded-lg bg-indigo-500 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
      <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">Make the Teaching Experience more Smooth with TRM.</div>

      <Link href="/TRM" class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm">Learn More</Link>

      {/* <!-- close button - start --> */}
      <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
        <button type="button" class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 xl:h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* <!-- close button - end --> */}
    </div>
  </div>
  {/* <!-- banner - end --> */}
</div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">

    {
        week.map((e)=>(
            <div key={e} class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{e}</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">#Week {e}</h2>
                <Accordion1 />
              </div>
            </div>
          </div>  
        ))
    }
 
  </div>
</section>
    
    {/* <Schedule/> */}
    </>
  )
}
