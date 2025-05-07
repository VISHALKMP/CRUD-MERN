import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './user.css';
function User() {
    const [users, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4001/user/all')
            .then(result => {
                setUser(result.data), console.log(result.data);
            })
            .catch(err => console.log(err)
            )

    }, [])

    const handelDelete = (id) =>{
    axios.delete(`http://localhost:4001/user/deleteUser/${id}`)
         .then(result =>{console.log(result),window.location.reload()})
         .catch(err => console.log(err))
        
        
    }
    return <>
        <div className='container bg-dark p-3'>
            <div className='container-fluid bg-danger'>
                <Link to='/create' className='btn btn-success'>Add + </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Age</td>
                            <td>Actions</td>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            users.map((users) => {
                                return <tr className='black'>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.age}</td>
                                    <td>
                                        <Link to={`/update/${users._id}`} className='btn btn-sucess'>Update</Link>

                                        <button className='btn btn-danger' onClick={(e) => {
                                            handelDelete(users._id)
                                        }}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    </>
}

export default User;