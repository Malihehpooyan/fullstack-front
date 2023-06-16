import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function AddUser() {

     let navigate=useNavigate()

    const[user,setUser]=useState({
        firstname:'',
        lastname:'',
        department:'',
    });

    const{firstname,lastname,department}=user

     const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

     }

     const onSubmit=async(e)=>{
         e.preventDefault();
         await axios.post('http://localhost:8080/user',user)
         navigate('/')
     };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                     
                    <form onSubmit={(e) =>onSubmit(e)}> 
                    <div className='mb-3'>
                        <label htmlFor='FirstName' className='form-lable'>
                            FirstName
                        </label>
                        <input
                         type={'text'}
                        className='form-control'
                        placeholder='Enter your firstName'
                        name='firstname'
                        value={firstname}
                        onChange={(e)=>onInputChange(e)}
                        />
                        
                        </div>
                         <div className='mb-3'>
                        <label htmlFor='LastName' className='form-lable'>
                            LastName
                        </label>
                        <input
                         type={'text'}
                        className='form-control'
                        placeholder='Enter your lastname'
                        name='lastname'
                        value={lastname}
                        onChange={(e)=>onInputChange(e)}
                        />
                       </div> 
                    <div className='mb-3'>
                        <label htmlFor='Departement' className='form-lable'>
                            Department
                        </label>
                        <input
                         type={'text'}
                        className='form-control'
                        placeholder='Enter department'
                        name='department'
                        value={department}
                        onChange={(e)=>onInputChange(e)}
                        />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to='/'>
                            Cancel
                        </Link>
                        </form>
                        </div>
                        </div>
                        </div>
    );
}

