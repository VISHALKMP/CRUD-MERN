// import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import CreateUser from './Createusers'
import UpdateUser from './Updateusers'
import Users from './users'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  

  return (
    <>
    <div>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Users/>}></Route>
           <Route path='/create' element={<CreateUser/>}></Route>
           <Route path='/update/:id' element={<UpdateUser/>}></Route>

         </Routes>
       </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
