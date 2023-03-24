import { TableContainer, Typography } from '@mui/material'
import React from 'react'

const TypeSample= () => {
    var num=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
       {num.map((value,index)=>{
        return <TypeSample>Number is {value}</TypeSample>
       })}
    </div>
  )
}

export default TypeSample
