
import { useEffect, useState, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

import ModalAddStudentToCourse from './ModalAddStudentToCourse';
import ModalDeleteStudentFromCourse from './ModalDeleteStudentFromCourse';
import { getStudentsFromCourse } from '../../services/Student-CourseService';
import { useParams } from 'react-router-dom';

const TableStudentsInCourse = () => {
    const [listStudents, setListStudents] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNewStudents, setIsShowModalAddNewStudents] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [id, setId] = useState('');
    let { courseId } = useParams();

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = useCallback (async () => {
        let res = await getStudentsFromCourse(courseId);
        if(res.data) {
            setListStudents(res.data);
        }
    })

    const handlePageClick = (event) => {
        getStudents(+event.selected + 1)
    };
    
    const handleDelete = (_id) => {
        setIsShowModalDelete(true);
        setId(_id);
        console.log(_id);
    }

    const handleClose = () => {
        setIsShowModalAddNewStudents(false);
        setIsShowModalDelete(false);
    }
    

    return (
        <div>
            <div className='my-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span><b>List Students: </b></span>
                <button className='btn btn-success' onClick={() => setIsShowModalAddNewStudents(true)}>Add new student</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
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
                                <tr key={`student-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.studentId}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.gender}</td>
                                    <td>
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
            <ModalAddStudentToCourse
                show={isShowModalAddNewStudents}
                handleClose={handleClose}
            />
            <ModalDeleteStudentFromCourse
                show={isShowModalDelete}
                handleClose={handleClose}
                id={id}
            />
        </div>
    );
}

export default TableStudentsInCourse;