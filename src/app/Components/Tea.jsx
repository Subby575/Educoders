import React from 'react'
import Image from 'next/image'
import TeaDp from '@/../public/teacherdp.jpg'
export default function Tea({param}) {
  return (
    
<body class="bg-gray-300 antialiased">
    <div class="container mx-auto my-60">
        <div>

            <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div class="flex justify-center">
                        <Image src={TeaDp} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div class="mt-16">
                    <h1 class="font-bold text-center text-3xl text-gray-900">Heritage Institute of Technology</h1>
                    <p class="text-center text-sm text-gray-400 font-medium">Kolkata,West Bengal</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div class="my-5 px-6">
                        <a href="#" class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span class="font-bold">@{param.num}</span></a>
                    </div>
                  

                    <div class="w-full">
                        <h3 class="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                
                                    Name
                                    <span class="text-gray-500 text-xl mx-5">{param.name}</span>
                            </a>

                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                
                                   Teacher Id
                                    <span class="text-gray-500 text-xl mx-5">{param.id}</span>
                            </a>

                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                
                                Chapter Expertise<span class="font-bold"></span>
                                <span class="text-gray-500 text-xl mx-5">{param.expertise}</span>
                            </a>

                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                
                                Availability
                                <span class="text-gray-500 text-xl mx-5">{param.astart}:00 - {param.aend}:0 </span>
                            </a>

                            <a href="#" class=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                               
                               Rating
                               <span class="text-gray-500 text-xl mx-5">{param.feedback} / 10</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>

  )
}
