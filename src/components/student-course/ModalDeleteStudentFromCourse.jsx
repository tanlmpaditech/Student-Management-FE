import Button from 'react-bootstrap/Button';
// import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { deleteStudentFromCourse } from '../../services/Student-CourseService';


const ModalDeleteStudent = (props) => {
    let { courseId } = useParams();
    const { show, handleClose, id } = props;
    let studentId = id;
    const handleDetele = async () => {
        let res = await deleteStudentFromCourse(courseId, studentId);
        console.log(courseId, studentId);
        if(studentId) {
            toast.success('Delete successfully')
            handleClose();
        } else {
            toast.error('Failed to delete student');
        }
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete it?
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={() => handleDetele()}>Delete</Button>
                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default ModalDeleteStudent;