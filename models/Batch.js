import mongoose from "mongoose";

// ============================
// Batch Model
// ============================
const BatchSchema = new Schema({
  // For example, Batch name can be a year or a label
  name: {
    type: String,
    required: true,
    trim: true
  },
  // Optional: you can store the year or any other attribute
  year: {
    type: Number
  },
  // Optionally maintain an array of student references
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'Student'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});


export const Batch = mongoose.model('Batch', BatchSchema);