import axios from "./customize-axios";

const fetchAllStudents = async () => {
    const data =  await axios.get('students');
    console.log();
    return data;
}   

const postCreateStudent = (studentId, fullName, email, address, phoneNumber, gender) => {
    return axios.post("/create-student", {studentId, fullName, email, address, phoneNumber, gender})
}

// const postCreateStudent = (name, job) => {
//     return axios.post("/students", {name, job});
// }

export {fetchAllStudents, postCreateStudent};