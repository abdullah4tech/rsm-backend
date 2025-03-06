import mongoose from "mongoose";

// ============================
// Resource Model
// ============================
const ResourceSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String },
  batchUpload: { type: String.Types.ObjectId, ref: 'Batch', required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
},
  { timestamps: true }
);


const Resource = mongoose.model('Resource', ResourceSchema);

export default Resource;