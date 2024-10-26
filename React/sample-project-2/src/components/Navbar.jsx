import { useState } from "react"
import React from 'react'

const Navbar = ({ appdata , logodata }) => {

    const [numberstate,setNumberstate]=useState(0)
    const [stringstate,setStringstate]=useState("a")
    const [arraystate,setArraystate]=useState(["a",false,0])

    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
        


  return (
    <>
         {appdata.appname} {logodata}  
    </>
  )
}

export default Navbar