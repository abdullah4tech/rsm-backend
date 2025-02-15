import Student from "../models/Students";
import Lecturer from '../models/Lecturers.js';
import { hashPassword } from "../libs/hashing_pwd.js";



export const userRegistration = async (req, res) => {
  const { name, code_id, email, role, password } = req.body;

  let new_password = hashPassword(password);
  if (role === 'student') {
    
  }

} 

export const userLogin = async (req, res) => { }
 