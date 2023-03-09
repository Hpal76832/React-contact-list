import React,{useState} from 'react'
import '../components/signin.css'
import { Navigate,redirect,useNavigate,Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../toolkit/counterslice'
import Form from './Form'

function SignIn() {
  let navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  // const s=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()



  function email_func(e){
    setEmail(e.target.value)
  }

  function password_func(e){
    setPassword(e.target.value)
  }
 
 
  function onclick(){
    if(localStorage.getItem(email+'abc')===password){
      return navigate('/contactpage',{state:{Email:email}})
   }else{
     alert('Error In The Fields')
   }
  }

  return (
    <div className='div'>
      <div className='container'>
        <Form email_func={email_func} password_func={password_func} onclick={onclick} email={email}>
          <button onClick={()=>{onclick();dispatch(getData(email))}} className="btn btn-primary">Log in</button>
        </Form>
        <h6><Link to='/signup'>Register Here</Link></h6>
        </div>
      
    </div>

  )
} 

export default SignIn
