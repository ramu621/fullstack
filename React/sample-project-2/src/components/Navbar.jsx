import { useEffect, useState } from "react"
import React from 'react'

const Navbar = ({ appdata , logodata }) => {

    const [numberstate,setNumberstate]=useState(0)
    const [stringstate,setStringstate]=useState("a")
    const [arraystate,setArraystate]=useState(["a",false,0])

    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
      
    const [count, setCount] = useState(0);
    useEffect(()=>{
      console.log("count is "+count)
    },[count] )


  return (
    <>
       <button className='w-[6rem] h-[4rem] bg-blue-500 text-white' onClick={()=> {setCount(count+1)}}>
          count {count}
        </button>
         {appdata.appname} {logodata}  
    </>
  )
}

export default Navbar