import React from 'react'
import { useLoaderData, useParams,Link } from 'react-router-dom'

function UserDetails() {

    const user =useLoaderData();

    const {userid,role} =useParams();
  return (
    <div className='user-details'>
        <h3><i className="fa-solid fa-caret-right"></i>
        
        <ul> 
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.company.name}/ {user.address.city}</li>
      
        
        </ul>
        <i className="fa-solid fa-caret-left"></i>
        <Link to="/users" >Back To List</Link>
        </h3>

    </div>
  )
}

export default UserDetails

export const userDeatilsloader=async({params}) =>{


    const  {userid}=params;
    const res=await fetch("https://jsonplaceholder.typicode.com/users/"+userid);
    return res.json();
}