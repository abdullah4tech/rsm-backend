import mongoose from "mongoose";

// ============================
// Student Model
// ============================
const StudentSchema = new Schema({
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
  // Store hashed password
  password: {
    type: String,
    required: true
  },
  // Reference to the batch the student belongs to
  batch: {
    type: Schema.Types.ObjectId,
    ref: 'Batch',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Student = mongoose.model('Student', StudentSchema);