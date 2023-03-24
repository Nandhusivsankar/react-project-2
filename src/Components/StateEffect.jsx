import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const StateEffect = () => {
    var [value,setvalue]= useState();
    useEffect(()=>{
        setvalue("Riya")
    },[])
    const alert = ()=>{
        alert("Hello Everyone")
    }
  return (
    <div>
      <Typography variant='h1'>{value}</Typography>
    </div>
  )
}

export default StateEffect
