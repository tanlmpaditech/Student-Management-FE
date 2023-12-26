import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';

import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import './App.scss';


function App() {
  const navigate = useNavigate()
  const [account, setAccount] = useState({});
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if(session) {
          setAccount(JSON.parse(session));
        } else {
          navigate("/login");
        }
    }, []);

  return (
    <div className='app-container'>
      <Container>
          {account && !_.isEmpty(account) && account.isAuthenticated && <Header/>}
          <AppRoutes />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
