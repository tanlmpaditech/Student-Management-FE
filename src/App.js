import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';

import Header from './components/Header';
import AppRoutes from './routes/AppRoute';
import './App.scss';


function App() {
  const navigate = useNavigate()
  const [account, setAccount] = useState({});
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        // console.log(JSON.parse(session));
        if(session) {
          setAccount(JSON.parse(session));
          navigate('/')
        } else {
          navigate("/login");
        }
    }, []);

  return (
    <div className='app-container'>
      <Container>
      {account && !_.isEmpty(account) && account.isAuthenticated && <Header/>}
      {/* <Header /> */}
          <AppRoutes />
      </Container>
      
      <ToastContainer />
    </div>
  );
}

export default App;
