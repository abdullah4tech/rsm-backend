import mongoose from "mongoose";

// ============================
// Resource Model
// ============================
const ResourceSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  resourceType: {
    type: String,
    trim: true
  },
  // URL pointing to the resource file (could be a link to a cloud storage location)
  fileUrl: {
    type: String,
    required: true
  },
  // Reference to the lecturer who uploaded the resource
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: 'Lecturer',
    required: true
  },
  // Array of tags for categorization or filtering
  tags: [{
    type: String,
    trim: true
  }],
  // Timestamps for when the resource was created/updated
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Optionally, you could use pre-save middleware to update 'updatedAt':
ResourceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export const Resource = mongoose.model('Resource', ResourceSchema);