import React from "react";
import Card from "@/app/Components/Card";
import Cody from '@/../public/Cody.jpg'
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <>
      {/* <strong><h1 className='text-3xl'>Student Dashboard</h1></strong> */}

      <Card />
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
      {/* <!-- content - start --> */}
      <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
        <h2 class="mb-2 text-xl font-bold text-white md:text-2xl lg:text-4xl">Cody<br />Your Study Companion</h2>

        <p class="mb-8 max-w-md text-gray-400"> Imagine having a knowledgeable, friendly, and always-available study buddy right at your fingertips. Our Cody is here to make your learning journey smoother, more efficient, and tailored just for you.

</p>

        <div class="mt-auto">
          <Link href="https://codychatbot.netlify.app/" class="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Talk now</Link>
        </div>
      </div>
      {/* <!-- content - end --> */}

      {/* <!-- image - start --> */}
      <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
        <Image src={Cody} loading="lazy" alt="Photo by Dom Hill" class="h-full w-full object-cover object-center" />
      </div>
      {/* <!-- image - end --> */}
    </div>
  </div>
</div>

    </>
  );
}
