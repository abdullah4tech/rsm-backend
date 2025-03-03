const { z } = require("zod");

/**
 * Common validation schemas and constraints for the Resource Management System (RSM) backend.
 * These schemas enforce data integrity and prevent invalid user input at the API level.
 */

// -------------------- Common Validation Rules --------------------

/**
 * Validates MongoDB ObjectId format.
 * Ensures IDs are 24-character hex strings (standard for MongoDB).
 */
const idSchema = z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid ObjectId format");

/**
 * Defines role-based access control (RBAC) roles.
 * Helps enforce security and permissions throughout the system.
 */
const roleSchema = z.enum(["admin", "lecturer", "student"]);

// -------------------- User Schema (Base) --------------------

/**
 * Base schema for users (Lecturers & Students).
 * Includes shared fields such as name, email, password, and role.
 */
export const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: roleSchema
});

// -------------------- Batch Schema --------------------

/**
 * Schema for Batches, representing student groups by academic year.
 * Enforces a minimum year of 2000 and prevents future years.
 */
export const batchSchema = z.object({
  name: z.string().min(2, "Batch name must be at least 2 characters")
});

// -------------------- Resource Schema --------------------

/**
 * Schema for educational resources uploaded by lecturers.
 * Enforces proper title formatting, valid file URLs, and ownership.
 */
export const resourceSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  uploadedBy: idSchema, 
  batchUpload: idSchema
});

// -------------------- Student Schema --------------------

/**
 * Schema for students, extending the base user schema.
 * Ensures each student is linked to a valid batch.
 */
export const studentSchema = userSchema.extend({
    batchId: idSchema,
    stdId: z.string().regex(/^code\d{9}$/, "Invalid std_id format. Expected format: codeYYYYNNNNN"),
});

// -------------------- Lecturer Schema --------------------

/**
 * Schema for lecturers, extending the base user schema.
 * Requires a department field to categorize lecturers.
 */
export const lecturerSchema = userSchema.extend({
    department: z.string().min(3, "Department name must be at least 3 characters"),
});

