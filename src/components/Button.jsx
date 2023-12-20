// import { useState } from "react"
import ModalAddNewStudent from "./student/ModalAddNewStudent";


const Button = () => {

    return (
        <div className='my-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span><b>List Students:</b> </span>
            <button className='btn btn-success' onClick={() => ModalAddNewStudent()}>Add new student</button>
        </div>
    )
}

export default Button
