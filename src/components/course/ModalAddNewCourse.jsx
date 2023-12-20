import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import { postCreateCourse } from '../../services/CourseService';

const ModalAddNewCourse = (props) => {
    const { show, handleClose } = props;
    const [courseId, setCourseId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [time, setTime] = useState('');
    const [teacherName, setTeacherName] = useState('');
    

    // const handleUpdateTable = (student) => {
    //     setListStudents([student, ...listStudents]);
    // }

    const handleSaveNewCourse = async () => {
        let res = await postCreateCourse(courseId, courseName, teacherName, time);
        console.log(res.data);
        if(res.data) {
            handleClose();
            setCourseId('');
            setCourseName('');
            setTime('');
            // setPhoneNumber('');
            toast.success('Create a new student successful');
        } else {
            toast.error('Failed to create student');
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
                                <label className='courseId'>Course ID</label>
                                <input type="text" className="form-control" value={courseId} onChange={(e) => setCourseId(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='courseName'>Course Name</label>
                                <input type="text" className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='teacherName'>Teacher</label>
                                <input type="text" className="form-control" value={teacherName} onChange={(e) => setTeacherName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='time'>Time</label>
                                <input type="text" className="form-control" value={time} onChange={(e) => setTime(e.target.value)}/>
                            </div>
                            
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSaveNewCourse()}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default ModalAddNewCourse;