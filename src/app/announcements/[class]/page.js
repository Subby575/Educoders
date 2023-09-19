import React from 'react'
import { announce } from '@/app/lib/announce'
import Ann from '@/app/Components/Ann'
import Navigate from '@/app/Components/Navigate'
export default function page() {
  return (
    <>
    <Navigate/>
    <Ann params={announce}/>
    </>
  )
}
