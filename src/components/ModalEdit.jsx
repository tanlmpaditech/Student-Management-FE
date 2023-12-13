import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import {putUpdateStudent} from '../services/StudentService'

const ModalEdit = (props) => {
    const {show, handleClose, dataStudentEdited} = props;
    const [id, setId] = useState('');
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        if(show) {
            setId(dataStudentEdited.id);
            setStudentId(dataStudentEdited.studentId);
            setFullName(dataStudentEdited.fullName);
            setEmail(dataStudentEdited.email);
            setAddress(dataStudentEdited.address);
            setPhoneNumber(dataStudentEdited.phoneNumber);
            setGender(dataStudentEdited.gender);
        }
    }, [dataStudentEdited])

    const handleEdit = async () => {
        let res = await putUpdateStudent(id, studentId, fullName, email, address, phoneNumber, gender);
        console.log(res.data);
        if(res.data) {
            toast.success('Edit successfully')
            handleClose();
        } else {
            toast.error('Failed to edit student');
        }
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Edit student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form>
                        
                            <div className="form-group">
                                <label className='studentId'>Student ID</label>
                                <input type="text" className="form-control" value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='fullName'>Full Name</label>
                                <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='email'>Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='address'>Address</label>
                                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label className='phoneNumber'>Phone number</label>
                                <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                            </div>
                            <label className='gender'>Gender</label>
                            <select className="form-control" onClick={(e) => setGender(e.target.value)}>
                                <option value="" defaultValue disabled hidden>Choose here</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
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

export default ModalEdit;