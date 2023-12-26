import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { addStudentToCourse } from '../../services/Student-CourseService';

const ModalAddStudentToCourse = (props) => {
    const { show, handleClose } = props;
    const [studentId, setStudentId] = useState('');

    const { courseId } = useParams();
    const handleSaveNewStudentToCourse = async () => {
        let res = await addStudentToCourse(courseId, studentId);
        // console.log(res.data);
        if(res.data) {
            handleClose();
            setStudentId('');
            toast.success('Add a student to course successfully');
        } else {
            toast.error('Failed to add student');
        }
    }
    
    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Add new student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form>
                            <div className="form-group">
                                <label className='studentId'>ID</label>
                                <input type="text" className="form-control" value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
                            </div>
                            
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveNewStudentToCourse()}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default ModalAddStudentToCourse;