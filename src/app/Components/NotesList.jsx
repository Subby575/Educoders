import React from 'react'
import { Pnotes } from '../lib/notes'
import Link from 'next/link'
export default function NotesList({params}) {

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">

                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{params}</h1>
                    
                </div>
                <h1 className='text-3xl bold'>Class 12</h1>
                <div class="flex flex-wrap">


                    {
                        Pnotes.map((e) => (
                            <>
                                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                                <p className='text-green-700 border-spacing-5'>{e.ta}</p>
                                <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{e.chap}</h2>
                                <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                
                                <Link href={e.link} class="text-indigo-500 inline-flex items-center">Read
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSceWNV5VCkMEGrGqIM5-TL5OKjKIBnZdSGJLcfrDONuOclyDg/viewform?usp=sf_link"}>
                                <button  class="text-white inline-flex items-center bg-green-600 rounded mx-3">Take Test
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                </Link>
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        {/* </div> */}
        </section >
  )
}
