import mongoose from "mongoose";

// ============================
// Lecturer Model
// ============================
const LecturerSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});



export const Lecturer = mongoose.model('Lecturer', LecturerSchema);