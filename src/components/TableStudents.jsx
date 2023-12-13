// import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

import {fetchAllStudents} from '../services/StudentService';

const TableStudents = () => {
    const [listStudents, setListStudents] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {
        let res = await fetchAllStudents();
        console.log(res.data);
        if(res.data) {
            console.log(res.total);
            setListStudents(res.data);
            setTotalStudents(res.total);
        }
        // console.log(res);
    }

    const handlePageClick = (event) => {
        getStudents(+event.selected + 1)
    };


    return (
        
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Student ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Address</th>    
                    <th>Phone Number</th>
                    <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {listStudents && listStudents.length > 0 && 
                        listStudents.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{item.studentId}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.gender}</td>
                                    
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default TableStudents;