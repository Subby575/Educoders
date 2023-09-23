"use client"
import React from "react";

import Try from "../Components/Try";

export default function page() {
   
  return (
    <>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mx-auto flex max-w-xl flex-col items-center text-center">
      <p class="mb-2 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Having Any Doubt?</p>
      <br/>
      <p>Select any Chapter</p>
    <Try/>
    </div>
    </div>
  </div>
    </>
  );
}
