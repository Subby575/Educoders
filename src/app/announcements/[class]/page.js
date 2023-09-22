import React from 'react'
import { announce } from '@/app/lib/announce'
import Ann from '@/app/Components/Ann'
import Navigate from '@/app/Components/Navigate'
import Float from '@/app/Comps/Float'
//import { GET } from '@/app/annroute/route'

const getAnnouncements = async() =>{
  let data = await fetch("http://localhost:3000/annroute");
  data = await data.json();
  if(data.success){
    return data.result;
  }else{
    return {success:false}
  }

}

export default async function page() {
  const announcements = await getAnnouncements();
  //console.log(announcements);
  return (
    <>
    <Navigate/>
    <Ann params={announcements}/>
    <Float/>
    </>
  )
}
