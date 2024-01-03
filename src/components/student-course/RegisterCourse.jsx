import { useState } from 'react';
// import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { registerCourse } from '../../services/Student-CourseService';

const RegisterCourse = () => {
    const [courseId, setCourseId] = useState('');
    const [studentId, setStudentId] = useState('');

    const handleRegisterCourse = async () => {
        if(!courseId) {
            toast.error('The Course ID is required')
        } else if(!studentId) {
            toast.error('The Student ID is required')
        } else {
            let res = await registerCourse(courseId, studentId);
            console.log(res.data);
            if(res.data.errCode == 0) {
                toast.success(res.data.message);
                setCourseId('');
                setStudentId('');
            } else {
                toast.error(res.data.message);
            }
        }
    // if(res.data) {
    //     setStudentId('');
    //     setCourseId('');
    //     toast.success('Create a new student successful');
    // } else {
    //     toast.error('Failed to create student');
    // }
    // if(res.data)
    }


    return (
        <div>
            <h2 className="col-12 mt-3 text-center text-uppercase">Register course</h2>
            <div className="form-group">
                <label className='courseId'>Course ID</label>
                <input type="text" className="form-control mb-2" value={courseId} onChange={(e) => setCourseId(e.target.value)}/>
            </div>
            <div className="form-group">
                <label className='studentId'>Student ID</label>
                <input type="text" className="form-control mb-2" value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
            </div>
            <Button variant="primary" className='mt-2' onClick={() => handleRegisterCourse()}>
                Register
            </Button>
        </div>
    );
}

export default RegisterCourse;