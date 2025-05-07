import express from 'express';
const route = express.Router();
import { CreatingUser , UserDelete,allRecord,getUser,UpdateUser} from '../controller/curd.js';

route.post('/createUser',CreatingUser)
route.get('/all',allRecord);
route.get('/getuser/:id',getUser)
route.put('/updateUser/:id',UpdateUser)
route.delete('/deleteUser/:id',UserDelete)

export default route;