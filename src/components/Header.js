import React from 'react'
import { useState } from 'react'
import Square from './Square'
import Input from './Input'
function Header() {


  const [colourValue,setColourValue]=useState('')
  const [hashValue,setHashValue]=useState('')
  const [isDarkText,setIsDarkTet]=useState(true)



  return (
    
    <div className='Square'>
      <Square
      colourValue={colourValue}
      hashValue={hashValue}
      isDarkText={isDarkText}
       />
       <Input
       colourValue={colourValue}
       setColourValue={setColourValue}
       setHashValue={setHashValue}
       isDarkText={isDarkText}
       setIsDarkTet={setIsDarkTet}
        />
    </div>
  )
}

export default Header
