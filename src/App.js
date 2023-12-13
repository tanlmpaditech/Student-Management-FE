import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Context } from './configs/Context';

import Header from './components/Header';
// import Button from './components/Button';
import TableStudents from './components/TableStudents';

import './App.scss';
import ModalAddNew from './components/ModalAddNew';



function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = () => {
      setIsShowModalAddNew(false);
  }
  return (
    <div className='app-container'>
      <Header/>
      <Container>
          <div className='my-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span><b>List Students: </b></span>
            <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Add new student</button>
          </div>
          <TableStudents />
      </Container>
      <ModalAddNew 
        show = {isShowModalAddNew}
        handleClose = {handleClose}
      />
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
