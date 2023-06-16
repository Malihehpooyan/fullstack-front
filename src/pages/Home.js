import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom"

export default function Home() {
  const [users,setUsers] = useState([]);
   
  const {id}=useParams()

  useEffect(()=> {
    loadUsers();
  },[]); 

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }

    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">Id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.department}</td>
                <td>
                  <button className="btn btn-success mx-2">View</button>
                 

                  <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary mx-2">
                   Edit
                  </Link>

                  <button className="btn btn-danger mx-2"
                  onClick={()=>deleteUser(user.id)}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
    </table>
   </div>
  </div> 
 );
}
