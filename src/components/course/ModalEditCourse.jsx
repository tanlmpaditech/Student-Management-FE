import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import {putUpdateCourse} from '../../services/CourseService'

const ModalEditCourse = (props) => {
    const {show, handleClose, dataCourseEdited} = props;
    const [id, setId] = useState('');
    const [courseId, setCourseId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if(show) {
            setId(dataCourseEdited.id);
            setCourseId(dataCourseEdited.courseId);
            setCourseName(dataCourseEdited.courseName);
            setTeacherName(dataCourseEdited.teacherName);
            setTime(dataCourseEdited.time);
        }
    }, [dataCourseEdited])

    const handleEdit = async () => {
        let res = await putUpdateCourse(id, courseId, courseName, teacherName, time);
        console.log(res.data);
        if(res.data) {
            toast.success('Edit successfully')
            handleClose();
        } else {
            toast.error('Failed to edit course');
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Edit course</Modal.Title>
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
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleEdit()}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}

export default ModalEditCourse;