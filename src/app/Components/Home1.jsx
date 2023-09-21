import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Edu from "@/../public/Education.jpg"
import Notes from "@/../public/book.jpg"
import Doubts from "@/../public/doubts.jpg"
import Classroom from "@/../public/class1.jpg"
import Blogspace from "@/../public/Blog.jpg"
export default function Home() {
  return (
    <>
    {/* {/*<!-- hero - start -->*/} 
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header class="mb-4 flex items-center justify-between py-4 md:py-8">
      {/* {/*<!-- logo - start -->*/} 
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        EduCoders
      </a>
      {/* {/*<!-- logo - end --> */}

      {/* {/*<!-- nav - start -->*/}
      <nav class="hidden gap-12 lg:flex">
        <Link href="#" class="text-lg font-semibold text-indigo-500">Home</Link>
        <Link href="/notes" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Notes</Link>
        <Link href="/Doubts" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Doubts</Link>
        <Link href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</Link>
      </nav>
      {/* {/*<!-- nav - end -->*/}

      {/* {/*<!-- buttons - start -->*/}
      <Link href="/Login/StudentLogin" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Login</Link>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      {/* {/*<!-- buttons - end -->*/}
    </header>

    <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* {/*<!-- image - start -->*/}
      <Image src={Edu} loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
      {/* {/*<!-- image - end -->*/}

      {/* {/*<!-- overlay - start -->*/}
      <div class="absolute inset-0 bg-indigo-400 mix-blend-multiply"></div>
      {/* {/*<!-- overlay - end -->*/}

      {/* {/*<!-- text start -->*/}
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p class="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">Very proud to introduce</p>
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Revolutionary way of Learning</h1>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link href="/Login/StudentLogin" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Student</Link>

          <Link href="/Login/TeacherLogin" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Teacher</Link>
        </div>
      </div>
      {/* {/*<!-- text end -->*/} 
    </section>
  </div>
</div>
{/* {/*<!-- hero - end -->*/} 

{/* {/*<!-- gallery - start -->*/} 
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Features</h2>

    <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
      {/* {/*<!-- image - start -->*/} 
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <Image src={Notes} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Notes</span>
      </a>
      {/* {/*<!-- image - end -->*/} 

      {/* {/*<!-- image - start -->*/} 
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <Image src={Doubts} loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Doubts</span>
      </a>
      {/* {/*<!-- image - end -->*/} 

      {/*<!-- image - start -->*/}
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <Image src={Classroom} loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Classroom</span>
      </a>
      {/*<!-- image - end -->*/}

      {/*<!-- image - start -->*/}
      <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
        <Image src={Blogspace} loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Blogspace</span>
      </a>
      {/*<!-- image - end -->*/}
    </div>

    <div class="flex items-start justify-between gap-8 sm:items-center">
      <p class="max-w-screen-sm text-sm text-gray-500 lg:text-base">.</p>

      <a href="#" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More Features</a>
    </div>
  </div>
</div>
{/*<!-- gallery - end -->*/}

{/*<!-- stats - start -->*/}
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-lg px-4 md:px-8">
    {/*<!-- text - start -->*/}
  
    {/*<!-- text - end -->*/}

    <div class="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
      {/*<!-- stat - start -->*/}
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">20+</div>
        <div class="text-sm text-indigo-200 sm:text-base">Teachers</div>
      </div>
      {/*<!-- stat - end -->*/}

      {/*<!-- stat - start -->*/}
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
        <div class="text-sm text-indigo-200 sm:text-base">Notes</div>
      </div>

      {/*<!-- stat - start -->*/}
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
        <div class="text-sm text-indigo-200 sm:text-base">Students</div>
      </div>
      {/*<!-- stat - end -->*/}

      {/*<!-- stat - start -->*/}
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold text-white sm:text-2xl md:text-3xl">No</div>
        <div class="text-sm text-indigo-200 sm:text-base">Distractions</div>
      </div>
      {/*<!-- stat - end -->*/}
    </div>
  </div>
</div>
{/*<!-- stats - end -->*/}


{/*<!-- call to action - start -->*/}
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
      {/*<!-- image - start -->*/}
      <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
      </div>
      {/*<!-- image - end -->*/}

      {/*<!-- content - start -->*/}
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Help center</h2>

        <p class="mb-8 max-w-md text-gray-600">Need any kind of help Or Stuck Somewhere? Don't bother just ask Us! </p>

        <div class="mt-auto">
          <a href="#" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Contact support</a>
        </div>
      </div>
      {/*<!-- content - end -->*/}
    </div>
  </div>
</div>
{/*<!-- call to action - end -->*/}

{/*<!-- footer - start -->*/}
<footer class="bg-white">
  <div class="bg-indigo-500 py-6">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="flex flex-col items-center justify-between gap-2 md:flex-row">
        <div class="mb-3 text-center md:mb-0 md:text-left">
          <span class="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
          <p class="text-indigo-200">Subscribe to our newsletter</p>
        </div>

        <form class="flex w-full gap-2 md:max-w-md">
          <input placeholder="Email" class="w-full flex-1 rounded border border-white bg-indigo-400 px-3 py-2 text-white placeholder-indigo-100 outline-none ring-indigo-300 transition duration-100 focus:ring" />

          <button class="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-indigo-600 md:text-base">Send</button>
        </form>
      </div>
    </div>
  </div>

  <div class="pt-12 lg:pt-16">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
        <div class="col-span-full lg:col-span-2">
          {/*<!-- logo - start -->*/}
          <div class="mb-4 lg:-mt-2">
            <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-5 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>

              Educoders
            </a>
          </div>
          {/*<!-- logo - end -->*/}

          <p class="mb-6 text-gray-500 sm:pr-8">A Revolutionary solution for Blended Learning to overcome inadequate infrastructure</p>

        </div>

  
</div>

      <div class="border-t py-8 text-center text-sm text-gray-400">© 2023 - Present EduCoders. All rights reserved.</div>
    </div>
  </div>
</footer>
{/*<!-- footer - end -->*/}
    
    </>
  )
}
