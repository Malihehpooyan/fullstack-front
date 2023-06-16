import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export default function ViewUser() {

    const [user,setUser]=useState({
        firstname:'',
        lastname:'',
        department:'',

    })

    const {id}=useParams();
    useEffect(() => {
        loadUser()
    },[]);

    const loadUser=async ()=>{

         const result=await axios.get(`http://localhost:8080/user/${id}`)
         setUser(result.data)
    }

    return (
        <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'> 
             <h2 className='text-center m-4'>User Details</h2>
          
           <div className='card'>
             <div className='card-header'>
                Details of user id:
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>FirstName:</b>
                         {user.firstname}

                    </li>
                    <li className='list-group-item'>
                        <b>LastName:</b>

                        {user.lastname}
                    </li>
                    <li className='list-group-item'>
                        <b>Departement:</b>
                        {user.department}
                    </li>
                </ul>
           </ div>
           </div> 
           <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
           </div> 
           </div>
           </div> 
    )
}
