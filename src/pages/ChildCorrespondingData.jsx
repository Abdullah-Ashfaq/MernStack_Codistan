import React, { useEffect, useState, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChildCorrespondingData = () => {

    const [data, setData] = useState([]);

    const Navigate = useNavigate()
    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/child`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
        {/* created the folling button to navigate back to ParentTransactions page  */}
        <Button size='small' variant='outlined' color='primary' sx={{position:"fixed", top:"4.4rem", right:"5rem"}} onClick={() => Navigate('/')}>Go Back</Button>

        <TableContainer component={Paper} className='table' sx={{ maxWidth: "80%", margin: "7rem auto" }}>
            <Table >
                <TableHead>
                    <TableRow >
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Sender</TableCell>
                        <TableCell align="right">Reciever</TableCell>
                        <TableCell align="right">Total Amount</TableCell>
                        <TableCell align="right">Total Paid Amount</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((val) => {
                        return <>
                            <TableRow key={val.childId}>
                                <TableCell>{val.childId}</TableCell>
                                <TableCell align="right">{val.sender}</TableCell>
                                <TableCell align="right">{val.receiver}</TableCell>
                                <TableCell align="right">{val.totalAmount}</TableCell>
                                <TableCell align="right">{val.paidAmount}</TableCell>

                            </TableRow>
                        </>
                    })}

                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}

export default ChildCorrespondingData