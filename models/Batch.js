import mongoose from "mongoose";

// ============================
// Batch Model
// ============================
const BatchSchema = new Schema({
  name: { type: String, required: true, trim: true },
  batchCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});


export const Batch = mongoose.model('Batch', BatchSchema);