import mongoose from "mongoose";

// ============================
// Batch Model
// ============================
const BatchSchema = new Schema({
  name: { type: String, required: true, trim: true },
  batchCode: { type: String, required: true },
  lecturer: [{ type: Schema.Types.ObjectId, ref: 'Lecturer' }],
  createdAt: { type: Date, default: Date.now }
});


export const Batch = mongoose.model('Batch', BatchSchema);