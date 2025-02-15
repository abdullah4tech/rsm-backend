import mongoose from "mongoose";

// ============================
// Student Model
// ============================
const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  batch: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch' },
  token: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', StudentSchema);

export default Student;