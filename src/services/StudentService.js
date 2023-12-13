import axios from "./customize-axios";

const fetchAllStudents = async () => {
    const data =  await axios.get('students');
    return data;
}   

const postCreateStudent = async (studentId, fullName, email, address, phoneNumber, gender) => {
    return await axios.post('/create-student', {studentId, fullName, email, address, phoneNumber, gender})
}

const putUpdateStudent = async (id, studentId, fullName, email, address, phoneNumber, gender) => {
    return await axios.put('/edit-student', {id, studentId, fullName, email, address, phoneNumber, gender});
}

const deleteStudent = async (id) => {
    return await axios.delete('/delete-student', {id});
}
    
export {fetchAllStudents, postCreateStudent, putUpdateStudent, deleteStudent};