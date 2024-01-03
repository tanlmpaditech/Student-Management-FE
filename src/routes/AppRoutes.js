import { Routes, Route, useParams } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import TableStudents from '../components/student/TableStudents';
import TableCourses from '../components/course/TableCourses';
import TableStudentsInCourse from '../components/student-course/TableStudentsInCourse';
import RegisterCourse from '../components/student-course/RegisterCourse';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/students' element={<TableStudents />} />
                <Route path='/courses' element={<TableCourses />} />
                <Route path='/register-course' element={<RegisterCourse />} />
                <Route path='/course/:courseId' element={<TableStudentsInCourse />} /> 
                <Route path='*' element={<NotFound />} />
            </Routes>
           
            
        </>
    )
}

export default AppRoutes;