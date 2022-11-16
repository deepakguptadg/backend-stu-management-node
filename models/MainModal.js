import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const recordSchema = new Schema({
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
export const RecordModal = mongoose.model('record', recordSchema);


const contactSchema = new Schema({
    sender_id: {type: String, default: null},
    username: {type: String, default: null},
    email: {type: String, default: null},
    phone: Number,
    address: String,
    message: String,
    is_active: {type: Number, default : 0},
    created_at: { type: Date, default: Date.now() },
});
export const ContactModal = mongoose.model('contact', contactSchema);

