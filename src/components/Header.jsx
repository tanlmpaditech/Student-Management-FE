import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Header = () => {
    // const { logout } = useContext(AdminContext);
    
    // const navigate = useNavigate();
    const handleLogOut = () => {
        // navigate('/login');
        sessionStorage.clear();
        toast.success("Log out successfully");
        window.location.reload();
    }
    const location = useLocation();
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    {/* <Navbar.Brand href="/">Student-Management</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={location.pathname}>
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                        <NavLink className="nav-link" to='/students'>Manage students</NavLink>
                        <NavLink className="nav-link" to='/courses'>Courses</NavLink>
                        <NavLink className="nav-link" to='/register-course'>Register course</NavLink>
                    </Nav>
                    <Nav>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleLogOut()}>Log out</NavDropdown.Item>
                                
                        </NavDropdown>  */}
                        <NavLink className="nav-link text-danger fw-bold" href='/login' onClick={() => handleLogOut()} >Log Out</NavLink>
                        
                        {/* <a href='/login' onClick={() => handleLogOut() }>Log Out</a> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;