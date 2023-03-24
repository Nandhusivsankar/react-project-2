import { Button,Typography } from '@mui/material'
import React, {useState} from 'react'

const Statetask = () => {
    var [pagename,setpagename] = useState("")

     const Changename = () => {
        setpagename("Home Page")
    }
    const Changenametwo = () =>{
        setpagename("Gallery")
    }
    const Changenamethree = () =>{
        setpagename("Contact")
    }
    return (
        <div>
            <br></br>
            <Button variant='contained' color='primary'onClick={Changename}>Home Page</Button>
            <Button variant='contained' color='secondary'onClick={Changenametwo}>Gallery Page</Button>
            <Button variant='contained' color='error'onClick={Changenamethree}>Contact Page</Button>
            <Typography>Wellcome to {pagename}</Typography>
        </div>
    )
}
 export default Statetask