import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faEyeSlash, faEye, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';

import { login } from '../services/AdminService';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [showSpinner, setShowSpinner] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        setShowSpinner(true);
        if(!email || !password) {
            toast.error('Username/password is required');
        }
        let res = await login(email, password);
        // console.log(res.data.adminData.errCode)
        // if(sessionStorage) navigate('/');
        if(res.data.adminData.errCode === 0) {
            let data = {
                isAuthenticated: true,
                token: res.data.adminData.token
            }
            sessionStorage.setItem('account', JSON.stringify(data))
            navigate('/')
            window.location.reload();
        } else {
            toast.error('Username or password is incorrect');
        }
        setShowSpinner(false);
    }

    return(
        <>
            <div className='login-container col-12 col-sm-4'>
                <div className='title'>Log in</div>
                <div className='text'>Email</div>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <div className='input-email'>
                    <input type={showPassword ? 'password' : 'text'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FontAwesomeIcon className="hidePassword" icon={showPassword ? faEyeSlash : faEye} onClick={() => setShowPassword(!showPassword)}/>

                </div>
                <button className={email && password ? 'active' : 'disable'} onClick={() => handleLogin()}>
                    {showSpinner && < FontAwesomeIcon icon={faSpinner} className='mx-1 spinner'/>}
                    Login
                </button>
                {/* <NavLink className='back' to='/'>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                    Go back
                </NavLink> */}
            </div>
        </>
    )
  
}


export default Login;


