import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from '@mui/material'
import React from 'react'

const SampleArrayObject = () => {
    var pname = [{ name: "Manu", age: 10, place: "Munar" },
    { name: "Moosa", age: 20, place: "Kootayam" }]
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value, index) => {
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.place}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SampleArrayObject
