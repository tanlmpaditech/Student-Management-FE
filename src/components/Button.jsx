// import { useState } from "react"
import ModalAddNew from "./ModalAddNew";


const Button = () => {

    return (
        <div className='my-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span><b>List Students:</b> </span>
            <button className='btn btn-success' onClick={() => ModalAddNew()}>Add new student</button>
        </div>
    )
}

export default Button
