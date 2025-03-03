import mongoose from "mongoose";

// ============================
// Lecturer Model
// ============================
const LecturerSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  batchId: [{ type: String.Types.ObjectId, ref: 'Batch' }],
},
  { timestamps: true }
);



const Lecturer = mongoose.model('Lecturer', LecturerSchema);

export default Lecturer;