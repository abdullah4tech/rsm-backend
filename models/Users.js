import mongoose from "mongoose";

// ============================
// Users Model
// ============================
const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  codeId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch', default: null },
  role: { type: String, enum: ['admin', 'student', 'guest'] },
  token: { type: String, default: null }
},
  { timestamps: true }
);

const User = mongoose.model('User', UsersSchema);

export default User;