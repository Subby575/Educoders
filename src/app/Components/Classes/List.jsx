import React from 'react'
import { Divider } from '@mui/material'
import { Student } from '@/app/lib/data'
import Link from 'next/link'
export default function List() {
    // console.log(dummy);
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                {/* <!-- text - start --> */}
                <div class="mb-5 md:mb-16">
                    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-3 lg:text-3xl">Students</h2>

                </div>
                <Divider/>
                {/* <!-- text - end --> */}

                <div class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 m-5">
                    {/* <!-- person - start --> */}
                    {Student.map((e) => (
                        <>
                            
                            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
                                <div class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
                                    <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
                                </div>

                                <div>
                                   <Link href={`/profile/${e.studentid}`}> <div class="text-center font-bold text-black sm:text-left md:text-lg">{e.name}</div></Link>
                                    <p class="text-center text-sm text-gray-500 sm:text-left md:text-base">{e.dept}</p>
                                </div>
                            </div>
                        </>
                    ))


                    }
                    {/* <!-- person - end --> */}
                </div>
            </div>
        </div>
    )
}
