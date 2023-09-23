'use client'
 
import { usePathname } from 'next/navigation'
//  import { Student } from '@/app/lib/data'
import { Teacher } from '@/app/lib/Teacher'
import Tea from '@/app/Components/Tea'
export default function ExampleClientComponent() {
  const pathname = usePathname()
  // const nam=pathname.replace("%20"," ")
  const stud=pathname.substring(17)
  console.log(stud)



  return( <>
  {Teacher.map((e)=>(
    
    e.id==stud?<Tea param={e} />:" "

  ))
  }
  </>
)}
