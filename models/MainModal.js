import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mainSchema = new Schema({
    institute_name: {type: String, default: null},
    stu_name: {type: String, default: null},
    owener_name: {type: String, default: null},
    address: String,
    phone: Number,
    email: String,
    password: String,
    type: {type: String},
    is_active: {type: Number, default : 1},
    created_at: { type: Date, default: Date.now() },
});

const MainModal = mongoose.model('record', mainSchema);
export default MainModal

