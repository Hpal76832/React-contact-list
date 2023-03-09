import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../toolkit/counterslice'

const Form = (props) => {
    return (
        <form className='form-style'>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={(e)=>props.email_func(e)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <br></br>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={(e)=>props.password_func(e)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <br></br>
            {props.children}
            <br></br>
        </form>  
    );
}

export default Form;
