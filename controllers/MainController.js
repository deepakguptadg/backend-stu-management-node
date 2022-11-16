
import { RecordModal, ContactModal } from "../models/MainModal.js";


export const login =async (req, res) => {
    try {
        const {email, password} = req.body
        const recordCheck = await RecordModal.findOne({ email })
        if(recordCheck){
            if(email === recordCheck.email && password === recordCheck.password){
                res.status(200).json({ "Status": 'true', "Message": 'Login Successfully !!', 'data': recordCheck})
            }else{
                res.status(203).json({ "Status": 'false', "Message": 'Invalid Credentials !!'})
            }
        }else{
            res.status(203).json({ "Status": 'false', "Message": 'You are not a Register !!'})
        }
    } catch (error) {
        console.log(error)
    }
}

export const RecordAdd = async (req, res) => {
    try {
        console.log(req.body)
        const { institute_name, owener_name, stu_name, type, address, phone, email, password } = req.body;
        if (!type || !phone || !email || !password) {
            res.status(203).json({ "Status": 'false', "Message": 'Please Provide All Fields' })
        }
        const recordExist = await RecordModal.findOne({ email })
        const checkAdmin = await RecordModal.findOne({ type })
        if (recordExist) {
            res.status(203).json({ "Status": 'false', "Message": 'Record Already Exists' })
        } else {
            const record = new RecordModal({
                type: type,
                email: email,
                stu_name: stu_name,
                institute_name: institute_name,
                owener_name: owener_name,
                address: address,
                phone: phone,
                password: password,
            })
            const result = await record.save()
            res.status(201).json({ "Status": "true", "message": "Record Added Successfully ?", 'data': result })
        }
    } catch (error) {
        console.log(error)
    }
}


export const getRecord = async (req, res) => {
    try {
        const { type } = req.body
        if (type === 'admin') {
            const record = await RecordModal.find()
            res.status(200).json({ "Status": "true", "message": "Record Get Successfully ?", 'data': record })
        } else if (type) {
            const record = await RecordModal.find({ type: type })
            res.status(200).json({ "Status": "true", "message": "Record Get Successfully ?", 'data': record })
        } else {
            res.status(203).json({ "Status": "false", "message": "Invalid Request" })
        }
    } catch (error) {
        console.log(error)
    }
}


export const sendMessage = async (req, res) => {
    try {
        console.log(req.body)
        const { phone, username, message } = req.body
        if (!phone || !username || !message) {
            res.status(203).json({ "Status": 'false', "Message": 'Please Provide All Fields' })
        }
        const data = new ContactModal(req.body)
        const result = await data.save()
        res.status(201).json({ "Status": "true", "message": "Message Send Successfully ?", 'data': result })
    } catch (error) {
        console.log(error)
    }
}

export const getMessage = async (req, res) => {
    try {
        const data = await ContactModal.find()
        res.status(200).json({ "Status": "true", "message": "Message Get Successfully ?", 'data': data })
    } catch (error) {
        console.log(error)
    }
}