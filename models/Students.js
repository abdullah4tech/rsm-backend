import mongoose from "mongoose";

// ============================
// Student Model
// ============================
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stdId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' },
  token: { type: String, default: null }
},
  { timestamps: true }
);

const Student = mongoose.model('Student', StudentSchema);

export default Student;