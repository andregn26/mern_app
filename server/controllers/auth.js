import bcrypt from "bcrypt"
import { Jwt } from "jsonwebtoken"
import User from "..Models/User.js"

//! REGISTER USER
export const register = async (req, res) => {
  try {
    const {
      firsName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      ocupation,
    } = req.body
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const newUser = new User({
      firsName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      ocupation,
    })
  } catch (err) {}
}
