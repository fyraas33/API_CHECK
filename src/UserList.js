import React from 'react'
import './App.css'

const UserList = ({user}) => {
  return (
    user.map((el) =>
    <div className='card'>
          
    <h1>{el.name}</h1>
    <h1>{el.username}</h1>
    <h2 style={{textAlign: 'left', marginLeft: '40px'}}>E.mail : {el.email}</h2>
    <ul>
        <li><u>Address</u> : {el.address.street}</li>
        <li><u>Suite </u>: {el.address.suite}</li>
        <li><u>City</u> : {el.address.city}</li>
        <li><u>Zip Code </u>: {el.address.zipcode}</li>
        <li><u>Phone Number </u>: {el.phone}</li>
    </ul>
    
    
    </div>)
  )
}

export default UserList