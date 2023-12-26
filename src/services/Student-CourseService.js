import axios from "./customize-axios";

const getStudentsFromCourse = async (courseId) => {
    return await axios.get(`/course/${courseId}`);
}

const addStudentToCourse = async (courseId, studentId) => {
    return await axios.post(`/add-student-to-course/${courseId}`, {courseId, studentId});
}

const deleteStudentFromCourse = async (courseId, studentId) => {
    return await axios.delete(`/delete-student-from-course/${courseId}`, { data: {courseId, studentId} });
}

export { getStudentsFromCourse, addStudentToCourse, deleteStudentFromCourse };