import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/signin.css'
import Form from './Form'

function SignUp() {
  let navigate=useNavigate()
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')


  function password_func(e){
    setPassword(e.target.value)
  }
  function email_func(e){
    setEmail(e.target.value)
  }
  

  function confirmation(e){
    if(e.target.value===password){
      
    }else{
      console.log('error')
    }
  }

  function on_submit(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)){
      localStorage.setItem(email+'abc',password)
       return navigate('/')
    }else{

    }
  }

  return (
    <div className='div'>
      <div className='container'>
        <Form on_submit={on_submit} confirmation={confirmation} password_func={password_func} email_func={email_func}>
          <div className="form-group">
            <label id='label-style'>Confirm Password</label><br></br>
            <input onChange={(e)=>confirmation(e)}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
          </div>
          <br></br>
          <button onClick={()=>on_submit()} className="btn btn-primary">Sign In</button>
          <br></br>
        </Form>
        
      </div>
    </div>
  )
}

export default SignUp
