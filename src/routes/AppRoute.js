import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import TableStudents from '../components/student/TableStudents';
import TableCourses from '../components/course/TableCourses';

import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <PrivateRoute path='/students'>
                <TableStudents />
            </PrivateRoute>
            <PrivateRoute path='/courses'>
                <TableCourses />
            </PrivateRoute>
        </>
    )
}

export default AppRoutes;