import mongoose from "mongoose";

// ============================
// Resource Model
// ============================
const ResourceSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String },
  resourceType: { type: String, trim: true },
  batchUpload: { type: String.Types.ObjectId, ref: 'Batch', required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'Lecturer', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// When you create a resource this middleware is gonna get triggered. Which mean is gonna store the date you uploaded any resource
ResourceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export const Resource = mongoose.model('Resource', ResourceSchema);