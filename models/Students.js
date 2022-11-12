import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
  address: String,
  phone: Number,
  email: {type: String},
  institute_id: String,
});

const StudentModal = mongoose.model('student', studentSchema);
export default StudentModal