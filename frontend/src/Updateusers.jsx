import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom'
function UpdateUser(){
    const {id} = useParams();
       const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [age, setAge] = useState('');
        let navigate = useNavigate();

        useEffect(()=>{
            axios.get(`http://localhost:4001/user/getuser/${id}`)
            .then(result =>{console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)

            })
            
            .catch(err=>console.log(err)
            )  },[id])

            const Update = (e) =>{
                e.preventDefault();
                
                        axios.put(`http://localhost:4001/user/updateUser/${id}`, { name, email, age })
                        .then(result => console.log(result),
                        alert("User Updated SUssfully"),
                           navigate('/')
                        )
                        .catch(err=> console.log(err))
                        

            }
    return <>
    
    <div className='d-flex justify-content-center algin-items-center'>
        <form onSubmit={Update}>
 <h1>Update User</h1>
            <div>
                <label > name</label>
                <input type="text" placeholder='Put you Name' className='form-control'
                value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label > Email</label>
                <input type="text" placeholder='Put you Email' className='form-control'
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label > Age</label>
                <input type="text" placeholder='Put you Age' className='form-control'
                value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div> 
    </>
}
export default UpdateUser;