import React from 'react'
import './card.css'
import Image from 'next/image'
import Link from 'next/link'
import Book from '@/../public/book.jpg'
import Doubts from '@/../public/doubts.jpg'
import Class from '@/../public/class1.jpg'
export default function Card() {
  return (
<section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image class="lg:h-48 md:h-36 w-full object-cover object-center" src={Book}alt="blog"/>
          <div class="p-6">
           <Link href='/notes'> <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Notes</h1></Link>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image class="lg:h-48 md:h-36 w-full object-cover object-center" src={Doubts} alt="blog"/>
          <div class="p-6">
            
            <Link href='/Doubts'><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Doubts</h1></Link>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
           
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image class="lg:h-48 md:h-36 w-full object-cover object-center" src={Class} alt="blog"/>
          <div class="p-6">
         
            <Link href='/Classroom'><h1 class="title-font text-lg font-medium text-gray-900 mb-3">Class</h1></Link>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
