// import User from '../../frontend/src/users.jsx';
import UserModel from '../model/users.js'

export const CreatingUser = async (req, res) => {
    try {
        UserModel.create(req.body)
            .then(users => res.json(users))
            .catch(err => res.json(err))


    } catch (error) {
        console.log(error);

    }
}

export const allRecord = async (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id)
        .then(user => res.json(user))

        .catch(err => res.json(err))
}

export const UpdateUser = async (req, res) => {
    try {
        const id = req.params.id;
        UserModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, email: req.body.email, age: req.body.age })
        .then(users => res.json(users))
        .catch(err => res.json(err))

    } catch (error) {
        console.log(error);

    }
}
export const UserDelete = async (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}