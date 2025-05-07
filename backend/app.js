import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import CRUD from './routes/crud.js'
// import UserModel from './model/users.js'
const app = express();
                             
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user',CRUD);

// Conncted the mongoose database
mongoose.connect(`mongodb://127.0.0.1:27017/CRUDAGAIN`)
    .then(() => {
        console.log("mongoose conncted sussfully");

    }).catch(err => {
        console.log(err);

    })



app.listen(4001, () => {
    console.log("server started");

});