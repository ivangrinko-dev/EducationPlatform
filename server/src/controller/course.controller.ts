import express from "express"
import bildResponse from '../helper/bildresponse'
import { getAllCourse, createCourse, updateCourseById, deleteCourseById, getCourseById } from "../service/course.service";
const route = express.Router()

route.get(`/`, async(req, res) : Promise <void>=>{
    try {
        const data = await getAllCourse()
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
   
}) 

route.get(`/:id`, async(req, res) : Promise <void>=>{
    try {
        const {id} = req.params
        const data = await getCourseById(id)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
   
}) 

route.post(`/`, async (req, res): Promise <void>=>{
    try {
        const {course} = req.body;
        const data = await createCourse(course)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})

route.put(`/:id`, async (req, res): Promise <void>=>{
    try {
        const {id} = req.params
        const {course} = req.body;
        const data = await updateCourseById(id, course)
        bildResponse(res, 200, data) 
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
}) 

route.delete(`/:id`, async (req, res): Promise <void>=>{
    try {
        const {id} = req.params
        const data = await deleteCourseById(id)
        bildResponse(res, 200, data)
    } catch (error: any) {
        bildResponse(res, 404, error.message)
    }
})

export default route