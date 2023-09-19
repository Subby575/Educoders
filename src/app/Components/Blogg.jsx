import React from 'react'

export default function Blogg({params}) {
  return (
    <>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-20 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="font-semibold title-font text-gray-700">{params.subject}</span>
              <span class="mt-1 text-gray-500 text-sm">{params.date}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{params.question}</h2>
              <p class="leading-relaxed">{params.answer}</p>
              <a class="text-indigo-500 inline-flex items-center mt-4">{params.author}
              </a>
            </div>
          </div>
          </div>
          </div>
          </section>
          </>
  )
}
