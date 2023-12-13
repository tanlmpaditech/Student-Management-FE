
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

import {fetchAllStudents} from '../services/StudentService';
import ModalAddNew from './ModalAddNew';
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';

const TableStudents = () => {
    const [listStudents, setListStudents] = useState([]);
    // const [totalStudents, setTotalStudents] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNewStudents, setIsShowModalAddNewStudents] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataStudentEdited, setDataStudentEdited] = useState({});
    const [id, setId] = useState('');
    // const [dataStudentDelete, setDataStudentDelete] = useState({});

    // const [student, setStudent] = useState({})
    // const handleUpdateTable = (student) => {
    //     setListStudents([student, ...listStudents]);
    // }

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {
        let res = await fetchAllStudents();
        if(res.data) {
            setListStudents(res.data);
        }
    }

    const handlePageClick = (event) => {
        getStudents(+event.selected + 1)
    };

    const handleEdit = (student) => {
        setDataStudentEdited(student);
        setIsShowModalEdit(true);
    }   
    
    const handleDelete = (_id) => {
        setIsShowModalDelete(true);
        setId(_id);
    }

    const handleClose = () => {
        setIsShowModalEdit(false);
        setIsShowModalAddNewStudents(false);
        setIsShowModalDelete(false);
    }
    

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
                    <th>Actions</th>
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
                                    <td>
                                        <button className='btn btn-warning' onClick={() => handleEdit(item)}>Edit</button>
                                        <button className='btn btn-danger mx-4' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
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
            <ModalAddNew
                show={isShowModalAddNewStudents}
                handleClose={handleClose}
            />
            <ModalEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                dataStudentEdited={dataStudentEdited}
                handleEdit = {handleEdit}
            />
            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleClose}
                id={id}
                // handleUpdateTable = {handleUpdateTable}
            />
        </div>
    );
}

export default TableStudents;