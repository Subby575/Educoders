"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Navigate() {
  let url=usePathname();
  const pathn=url.substr(11);
  // console.log(pathn);
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={`/announcements/12`} class="mr-5 hover:text-blue-500 checked:text-white">Announcements</Link>
      <Link href='/Classroom/${}' class="mr-5 hover:text-blue-500">Students</Link>
      <Link href='/Leaderboard' class="mr-5 hover:text-blue-500">Leaderboard</Link>
      
    </nav>
    </div>
</header>

  )
}
