import axios from "./customize-axios";


const fetchAllCourses = async () => {
    const data =  await axios.get('/courses');
    return data;
}

const postCreateCourse = async (courseId, courseName, teacherName, time) => {
    return await axios.post('/create-course', {courseId, courseName, teacherName, time})
}

const deleteCourse = async (id) => {
    // console.log(id)
    return await axios.delete('/delete-course', { data: { id } });
}

// const 
export { fetchAllCourses, postCreateCourse, deleteCourse };