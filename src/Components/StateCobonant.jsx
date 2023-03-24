import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateCobonant = () => {
    var [fname, setFname] = useState("Hello")
    const ChangeName = () =>{
        setFname('Hi')
    }
    return (
        <div>
            <Typography>Welcome {fname}</Typography>
            <br></br>
            <Button variant="containd"onClick={ChangeName}>Change</Button>
        </div>
    )
}

export default StateCobonant
