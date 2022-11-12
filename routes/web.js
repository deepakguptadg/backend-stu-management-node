import express from 'express'
const router = express.Router()

import {addStudentDoc, getAllStudentDoc, getSingleStudentDoc, updateStudentDoc, deleteStudentDoc} from '../controllers/studentController.js'
import {addInstitute} from '../controllers/instituteController.js'

router.get('/student', getAllStudentDoc)
router.post('/student', addStudentDoc)
router.get('/student/:id', getSingleStudentDoc)
router.put('/student/:id', updateStudentDoc)
router.delete('/student/:id', deleteStudentDoc)

// Institute Routing
router.post('/institute', addInstitute)


export default router