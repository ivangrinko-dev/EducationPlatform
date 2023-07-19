import express from "express"
import { getAllCourse, createCourse, updateCourseById, deleteCourseById } from "../service/course.service";
const route = express.Router()

route.get(`/`, async(req, res) : Promise <void>=>{
    const data = await getAllCourse()
    res.send(data)
}) 

route.post(`/`, async (req, res): Promise <void>=>{
    const {id, course} = req.body;
    const data = await createCourse(id, course)
    res.send(data)
})

route.put(`/:id`, async (req, res): Promise <void>=>{
    const {id} = req.params
    const {course} = req.body;
    const data = await updateCourseById(id, course)
    res.send(data)
}) 

route.delete(`/:id`, async (req, res): Promise <void>=>{
    const {id} = req.params
    const data = await deleteCourseById(id)
    res.send(data)
})

export default route