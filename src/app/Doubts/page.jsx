"use client"
import Blogg from '../Components/Blogg'
import {Doubt}  from '../lib/doubt'
import Link from 'next/link';
import ChipsArray from '../Components/Chip';
export default function page() {
    // console.log(Doubt);
  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Why To late Ask your Doubts</h2>
    <div class="md:w-3/5 md:pl-6">
      
      <div class="flex md:mt-4 mt-6">
        <Link href='/Doubts/ask'><button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">Ask Your Doubt</button></Link>
        <Link href='/notes' class="text-indigo-500 inline-flex items-center ml-4">Read Notes
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  
  </div>
</section>
<p>---------------------------------------------</p>
<h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font m-2 md:w-2/5">Other's Doubt</h2>

<ChipsArray/>
    {
        Doubt.map((e)=>(
            <>
            <Blogg params={e}/>
            </>
        ))
    }
</>
   
  )
}
