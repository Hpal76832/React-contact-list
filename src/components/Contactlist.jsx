import React,{useState,useEffect} from 'react'
// import '../components/signini.css'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../toolkit/counterslice'
import { useLocation,useNavigate } from 'react-router-dom'
import Form from './Form'

function Contactlist() {
    const values=useSelector((state)=>state.counter.value)
    const navigate=useNavigate()
    const location=useLocation()
    const dispatch=useDispatch()
    const[data,setData]=useState([])


    const[field,setField]=useState({
        Name:'',
        Email:'',
        Phone:''
    })

    useEffect(()=>{
        setData(values[values.length-1])
    },[])

   
    
    function on_change(e){
        let field_name=e.target.getAttribute('name')
        let newData={...field}
        newData[field_name]=e.target.value
        setField(newData)
        
    }
    
    function on_click(){
        setData([...data,field])
        console.log(data,'klklklklklkl')
    }

    data!==undefined && localStorage.setItem(location.state.Email,JSON.stringify(data))
    useEffect(()=>{
        console.log(data,'plpllplpl')

    },[data])


    function log_out(){
        return navigate('/')
    }
   


  return (
    <div className='div'>
        <div className='container'>
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
            </tr>
            </thead>
            <tbody>
                {data === undefined ? []  : data.map((e,i)=>
                    <tr id={i}>
                    {/* <th scope="row">1</th> */}
                    <td>{i}</td>
                    <td>{e.Name}</td>
                    <td>{e.Email}</td>
                    <td>{e.Phone}</td>
                    <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">EDIT</button></td>
                    </tr>)}
               
            </tbody>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD</button>
        </table> 
        <button onClick={()=>log_out()} type="button" className="btn btn-secondary">Log out</button>
        </div>
        {/* Pop up */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

            <form id='form-style'>
                    <div className="form-group">
                        <label id='label-style'>Name</label><br></br>
                        <input onChange={(e)=>on_change(e)} name='Name' type="text" className="form-control" id="exampleInputPassword1" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label id ='label-style'>Email address</label><br></br>
                        <input onChange={(e)=>on_change(e)}  type="email" name='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                       
                    </div>
                    <div className="form-group">
                        <label id ='label-style'>Phone Number</label><br></br>
                        <input onChange={(e)=>on_change(e)}  type="number" name='Phone' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone number"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Default file input example</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                </form>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={()=>{on_click();dispatch(getData(location.state.Email))}} className="btn btn-primary">Save</button>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Contactlist



