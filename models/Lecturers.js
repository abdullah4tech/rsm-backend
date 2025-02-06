import mongoose from "mongoose";

// ============================
// Lecturer Model
// ============================
const LecturerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  // This password should be stored in hashed format
  password: {
    type: String,
    required: true
  },
  department: {
    type: String,
    trim: true
  },
  // Optionally, a lecturer can have many resources uploaded
  resources: [{
    type: Schema.Types.ObjectId,
    ref: 'Resource'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Lecturer = mongoose.model('Lecturer', LecturerSchema);