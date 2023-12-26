import { useEffect, useState, useCallback } from 'react';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import { useNavigate, useParams } from 'react-router';

import {fetchAllCourses} from '../../services/CourseService';
import ModalAddNewCourse from './ModalAddNewCourse';
import ModalEditCourse from './ModalEditCourse';
import ModalDeleteCourse from './ModalDeleteCourse';

const TableCourses = () => {
    const [listCourses, setListCourses] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModalAddNewCourse, setIsShowModalAddNewCourse] = useState(false);
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [isShowModalEdit, setIsShowModalEdit] = useState(false);
    const [dataCourseEdited, setDataCourseEdited] = useState({});
    const [id, setId] = useState('');

    const { courseId } = useParams();
   
    const navigate = useNavigate();

    useEffect(() => {
        getCourses()
    }, [listCourses])

    const getCourses = useCallback (async () => {
        let res = await fetchAllCourses();
        if(res.data) {
            setListCourses(res.data);
        }
    })

    const handlePageClick = (event) => {
        getCourses(+event.selected + 1)
    };

    const handleEdit = (course) => {
        setDataCourseEdited(course);
        setIsShowModalEdit(true);
        
    }   
    
    const handleDelete = (_id) => {
        setIsShowModalDelete(true);
        setId(_id);
    }

    const handleClose = () => {
        setIsShowModalEdit(false);
        setIsShowModalAddNewCourse(false);
        setIsShowModalDelete(false);
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
                    <th>ID</th>
                    <th>Course ID</th>
                    <th>Course name</th>
                    <th>Teacher</th>
                    <th>Time</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listCourses && listCourses.length > 0 && 
                        listCourses.map((item, index) => {
                            return (
                                <tr key={`course-${index}`} style={{cursor: 'pointer'}} >
                                    <td onClick={() => navigate(`/course/${item.id}`)}>{item.id}</td>
                                    <td onClick={() => navigate(`/course/${item.id}`)}>{item.courseId}</td>
                                    <td onClick={() => navigate(`/course/${item.id}`)}>{item.courseName}</td>
                                    <td onClick={() => navigate(`/course/${item.id}`)}>{item.teacherName}</td>
                                    <td onClick={() => navigate(`/course/${item.id}`)}>{item.time}</td>
                                    <td style={{cursor: 'default'}}>
                                        <button className='btn btn-warning z-5'  onClick={() => handleEdit(item)}>Edit</button>
                                        <button className='btn btn-danger mx-4 z-5' onClick={() => handleDelete(item.id)}>Delete</button>
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
            <ModalAddNewCourse
                show={isShowModalAddNewCourse}
                handleClose={handleClose}
            />
            <ModalEditCourse
                show={isShowModalEdit}
                handleClose={handleClose}
                dataCourseEdited={dataCourseEdited}
                handleEdit = {handleEdit}
            />
            <ModalDeleteCourse
                show={isShowModalDelete}
                handleClose={handleClose}
                id={id}
            />
        </div>
    );
}

export default TableCourses;