
import MainModal from "../models/MainModal.js";
const RecordAdd = async (req, res) => {
    try {
        console.log(req.body)
        const { institute_name,owener_name,stu_name,type, address, phone, email, password } = req.body;
        if (!type || !phone || !email || !password) {
            res.status(203).json({ "Status": 'Failed', "Message": 'Please Provide All Fields' })
        }
        const recordExist = await MainModal.findOne({ email })
        const checkAdmin = await MainModal.findOne({ type })
        if (recordExist) {
            res.status(203).json({ "Status": 'Failed', "Message": 'Record Already Exists' })
        }else{
            const record = new MainModal({
                type:type,
                email: email,
                stu_name:stu_name,
                institute_name: institute_name,
                owener_name: owener_name,
                address: address,
                phone: phone,
                password: password,
            })
            const result = await record.save()
            res.status(201).json({ "Status": "success", "message": "Record Added Successfully ?", 'data': result })
        }
    } catch (error) {
        console.log(error)
    }
}


const getRecord = async (req, res) => {
    try {
        const {type} = req.body
        if(type === 'admin'){
            const record = await MainModal.find()
            res.status(200).json({ "Status": "success", "message": "Record Get Successfully ?", 'data': record })
        }else if(type === 'ins'){
            const record = await MainModal.find({type: type})
            res.status(200).json({ "Status": "success", "message": "Record Get Successfully ?", 'data': record })
        }else {
            res.status(203).json({ "Status": "Failed", "message": "Invalid Request"})
        }
    } catch (error) {
        console.log(error)
    }
}


export { RecordAdd, getRecord }