import axios from "./customize-axios";

const fetchAllStudents = async () => {
    const data =  await axios.get('students');
    return data;
}   

const postCreateStudent = async (studentId, fullName, email, address, phoneNumber, gender) => {
    return await axios.post('/create-student', {studentId, fullName, email, address, phoneNumber, gender})
    // return {studentId, fullName, email, address, phoneNumber, gender}
}

// const postCreateStudent = (name, job) => {
//     return axios.post("/students", {name, job});
// }

export {fetchAllStudents, postCreateStudent};