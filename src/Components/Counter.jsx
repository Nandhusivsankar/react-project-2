import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [num,setNUM] = useState(0)
    const inc =()=>{
        setNUM(++num)
    }
    const dec =()=>{
        setNUM(--num)
    }
  return (
    <div>
      <Typography>{num}</Typography>
      <Button onClick={inc}>+</Button>
      <Button onClick={dec}>-</Button>
    </div>
  )
}

export default Counter
