
import InstituteModal from "../models/InstituteModal.js";
const addInstitute = async (req, res) => {
    try {
        console.log(req.body)

        // const { displayName, email, password } = req.body
        const { institute_name, address, phone, email, password } = req.body;


        if (!displayName || !email || !password) {
            res.send({ "Status": 'Failed', "Message": 'Please Provide All Fields' })
        }

        const userExist = await InstituteModal.findOne({ email })

        if (userExist) {
            res.send({ "Status": 'Failed', "Message": 'User Already Exists' })
        }

        const user = new UserModal({
            institute_name: institute_name,
            address: address,
            phone: phone
        })
        const result = await user.save()
        res.status(201).json({ "Status": "success", "message": "Institute Added Successfully ?", 'data': result })

       
    } catch (error) {
        console.log(error)
    }
}

export { addInstitute }