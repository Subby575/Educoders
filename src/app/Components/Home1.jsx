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
      <div class="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
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
      <p class="max-w-screen-sm text-sm text-gray-500 lg:text-base">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

      <a href="#" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
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

          <p class="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

          {/*<!-- social - start -->*/}
          <div class="flex gap-4">
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          {/*<!-- social - end -->*/}
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