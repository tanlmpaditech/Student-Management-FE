import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';

import {fetchAllCourses} from '../../services/CourseService';
import ModalAddNewCourse from './ModalAddNewCourse';
// import ModalEditStudent from './ModalEditStudent';
import ModalDeleteCourse from './ModalDeleteCourse';

const TableCourses = () => {
    const [listCourses, setListCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNewCourse, setIsShowModalAddNewCourse] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataStudentEdited, setDataStudentEdited] = useState({});
    const [id, setId] = useState('');
   
    const navigate = useNavigate();
    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = async () => {
        let res = await fetchAllCourses();
        if(res.data) {
            setListCourses(res.data);
        }
    }

    const handlePageClick = (event) => {
        getCourses(+event.selected + 1)
    };

    const handleEdit = (course) => {
        // setDataStudentEdited(student);
        // setIsShowModalEdit(true);
        
    }   
    
    const handleDelete = (_id) => {
        setIsShowModalDelete(true);
        setId(_id);
    }

    const handleClose = () => {
        // setIsShowModalEdit(false);
        setIsShowModalAddNewCourse(false);
        setIsShowModalDelete(false);
    }

    const addStudentToCourse = (courseId) => {
        navigate(`/course/${courseId}`)
    }
    

    return (
        
        <div>
            <div className='my-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <span><b>Courses: </b></span>
                <button className='btn btn-success' onClick={() => setIsShowModalAddNewCourse(true)}>Add new course</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Course ID</th>
                    <th>Course name</th>
                    <th>Teacher</th>
                    <th>Time</th>
                    {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {listCourses && listCourses.length > 0 && 
                        listCourses.map((item, index) => {
                            return (
                                <tr key={`course-${index}`} style={{cursor: 'pointer'}} onClick={() => addStudentToCourse(item.courseId)}>
                                    <td>{item.courseId}</td>
                                    <td>{item.courseName}</td>
                                    <td>{item.teacherName}</td>
                                    <td>{item.time}</td>
                                    {/* <td>
                                        <button className='btn btn-warning' onClick={() => handleEdit(item)}>Edit</button>
                                        <button className='btn btn-danger mx-4' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td> */}
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
            <ModalAddNewCourse
                show={isShowModalAddNewCourse}
                handleClose={handleClose}
            />
            {/* <ModalEdit
                show={isShowModalEdit}
                handleClose={handleClose}
                dataStudentEdited={dataStudentEdited}
                handleEdit = {handleEdit}
            /> */}
            <ModalDeleteCourse
                show={isShowModalDelete}
                handleClose={handleClose}
                id={id}
            />
        </div>
    );
}

export default TableCourses;