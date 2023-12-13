import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

import { deleteStudent } from '../services/StudentService';


const ModalDelete = (props) => {
    const { show, handleClose, id } = props;
    // const [id, setId] = useState('');
    // const [id, setId] = useState('');
    // console.log(_id);
    const handleDetele = async () => {
        let res = await deleteStudent(id);
        console.log("id: ", id);
        console.log(res.data);
        if(id) {
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

export default ModalDelete;