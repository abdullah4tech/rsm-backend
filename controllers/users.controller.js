import User from "../models/Users.js"
import { hashPassword, verifyHash } from "../libs/hashing_pwd.js";
import jwt from 'jsonwebtoken';

const validateSignupData = async (req, res) => {
  const { name, codeId, password, batchId } = req.body;

  if (!name) return res.status(400).json({ message: "Enter your name" });
  if (!codeId) return res.status(400).json({ message: "Enter your codeId" });
  if (!password) return res.status(400).json({ message: "Enter password" });

  const existingUser = await User.findOne({ codeId }).exec();
  if (existingUser) {
    return res.status(400).json({ message: "Account already exists" });
  }
  return true;
};


export const registerUser = async (req, res) => {
  const { name, codeId, password, batchId } = req.body

  const valid = validateSignupData(req, res);
  if (valid) {
    try {
      const hashedPwd = await hashPassword(password)
      const user = await User.create({ name, codeId, password: hashedPwd, batchId })

      res.status(201).json({
        message: "Account created successfully!",
        user: {
          _id: user._id,
          codeId: user.codeId,
          name: user.name,
          password: user.password,
          batchId: user.batchId
        }
      })
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

}

export const loginUser = async (req, res) => {
  const { codeId, password } = req.body;

  if (!codeId || !password) {
    return res.status(400).json({ message: "empty fields" });
  }

  try {
    const user = await User.findOne({ codeId });
    if (!user) {
      return res.status(404).json({ message: "Account not found" });
    }

    const valid = await verifyHash(password, user.password);
    if (!valid) {  // Now checking if valid is false
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, codeId: user.codeId, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login success",
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const getUsers = async (req, res) => { }

export const updateUser = async (req, res) => { }

export const deleteUser = async (req, res) => { }