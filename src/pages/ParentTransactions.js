import React, { useEffect, useState, useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ParentTransactions = () => {
    // used the usestate hook to update the page number 
    const [page, setPage] = useState(1);

    const [data, setData] = useState([]);

// used UseNavigate from react-router-dom to navigate to another page without refreshing the app  
    const Navigate = useNavigate()

    //   fetched the data from the api using axios
    const fetchData = useCallback(async (pageNumber) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/transactions?page=${pageNumber}`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    //   used the useEffect to render the data whenever the state changes
    useEffect(() => {
        fetchData(page);
    }, [fetchData, page]);

    return (
        <>
            {/* used the mui table */}
            <TableContainer component={Paper} className='table' sx={{ maxWidth: "80%", margin: "5rem auto" }}>
                <Table >
                    <TableHead>
                        <TableRow >
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Sender</TableCell>
                            <TableCell align="right">Reciever</TableCell>
                            <TableCell align="right">Total Amount</TableCell>
                            <TableCell align="right"><Button variant='outlined' size='small' color='primary' onClick={() => Navigate('/child')}>Total Paid Amount</Button></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((val) => {
                            return <>
                                <TableRow key={val.id}>
                                    <TableCell>{val.id}</TableCell>
                                    <TableCell align="right">{val.sender}</TableCell>
                                    <TableCell align="right">{val.receiver}</TableCell>
                                    <TableCell align="right">{val.totalAmount}</TableCell>
                                    <TableCell align="right">{val.totalPaidAmount}</TableCell>

                                </TableRow>
                            </>
                        })}

                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "3rem" }}>

                {/* if the value is less than 1 the button will be disabled */}

                <Button variant='contained' color='primary' size='small' disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>

                {/* and if there's no data on the selected page number then this button will also be disbaled to prevent user from updating the state of the pagenumber */}

                <Button variant='contained' color='primary' size='small' disabled={data.length === 0} onClick={() => setPage(page + 1)}>Next</Button>

            </div>

        </>
    );
};

export default ParentTransactions;
