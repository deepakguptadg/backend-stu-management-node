import express from 'express'
const router = express.Router()

// import {addStudentDoc, getAllStudentDoc, getSingleStudentDoc, updateStudentDoc, deleteStudentDoc} from '../controllers/studentController.js'
import {RecordAdd, getRecord} from '../controllers/MainController.js'
router.post('/add-record', RecordAdd)
router.post('/get-record', getRecord)

export default router