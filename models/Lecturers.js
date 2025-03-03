import mongoose from "mongoose";

// ============================
// Lecturer Model
// ============================
const LecturerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  batchId: [{ type: String.Types.ObjectId, ref: 'Batch' }],
  token: { type: String, default: null }
},
  { timestamps: true }
);



const Lecturer = mongoose.model('Lecturer', LecturerSchema);

export default Lecturer;