import mongoose from "mongoose";

// ============================
// Batch Model
// ============================
const BatchSchema = new Schema({
  batchName: { type: String, required: true, trim: true },
  batchCode: { type: String, required: true },
},
  { timestamps: true }
);


const Batch = mongoose.model('Batch', BatchSchema);


export default Batch;