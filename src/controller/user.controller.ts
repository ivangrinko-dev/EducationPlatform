import express from "express"
import { createUser, getAllUser, getAllUserById, updateUserById, deleteUserById } from "../service/user.service";
const route = express.Router()

route.get(`/`, async(req, res) : Promise <void>=>{
    const data = await getAllUser()
    res.send(data)
}) 
route.get(`/:id`, async(req, res): Promise <void>=>{
    const {id} = req.params
    const data = await getAllUserById(id)
    res.send(data)
})


route.post(`/`, async (req, res): Promise <void>=>{
    const {name, surname, email, pwd} = req.body;
    const data = await createUser(name, surname, email, pwd)
    res.send(data)
}) 

route.put(`/:id`, async (req, res): Promise <void>=>{
    const {id} = req.params
    const {name, surname, email, pwd} = req.body;
    const data = await updateUserById(id, name, surname, email, pwd)
    res.send(data)
}) 

route.delete(`/:id`, async (req, res): Promise <void>=>{
    const {id} = req.params
    const data = await deleteUserById(id)
    res.send(data)
}) 

export default route