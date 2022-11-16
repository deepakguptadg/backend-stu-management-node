import express from 'express'
const router = express.Router()

// import {addStudentDoc, getAllStudentDoc, getSingleStudentDoc, updateStudentDoc, deleteStudentDoc} from '../controllers/studentController.js'
import {login, RecordAdd, getRecord, sendMessage, getMessage} from '../controllers/MainController.js'
router.post('/login', login)
router.post('/add-record', RecordAdd)
router.post('/get-record', getRecord)
router.post('/send-message', sendMessage)
router.post('/get-message', getMessage)

export default router