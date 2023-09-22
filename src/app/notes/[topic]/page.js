'use client'
 
import Bcrumb from '@/app/Components/Breadcrumbs';
import NotesList from '@/app/Components/NotesList';
import { Pnotes } from '@/app/lib/notes';

import { usePathname } from 'next/navigation'

export default function Topic({params}) {
  const pathname = usePathname()
  const stud=pathname.substring(7)
  console.log(params);
//   let origin ="";
//  for(let i=0;i<stud.length;i++){
//     if(stud[i]=="%"){
//       origin= stud.replace("%20"," ");
//     }
   
//     console.log(stud[i]);
//  }
let origin=stud.replace("%20"," ");



  return( <>

<Bcrumb params={origin}/>

<NotesList key={params.topic} params={origin}/>
  </>
)}
