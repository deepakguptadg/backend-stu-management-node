import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const instituteSchema = new Schema({
    institute_name: String,
    address: String,
    phone: Number,
    email: String,
    password: String,
    is_active: {type: Number, default : 1},
    created_at: { type: Date, default: Date.now() },
});

const InstituteModal = mongoose.model('institute', instituteSchema);
export default InstituteModal

