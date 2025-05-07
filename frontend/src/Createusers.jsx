import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    let navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:4001/user/createUser', { name, email, age })
        .then(result => console.log(result),
        alert("User Created SUssfully"),
           navigate('/')
        )
        .catch(err=> console.log(err))
        
    }   
    return <>

        <div className='d-flex justify-content-center algin-items-center'>
            <form  onSubmit={Submit}>

                <div>
                    <label > name</label>
                    <input type="text" placeholder='Put you Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label > Email</label>
                    <input type="text" placeholder='Put you Email' className='form-control'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label > Age</label>
                    <input type="text" placeholder='Put you Age' className='form-control'
                        onChange={(e) => setAge(e.target.value)} />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </>
}
export default CreateUser;