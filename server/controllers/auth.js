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
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

//! LOG IN USER

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if (!user) return res.status(400).json({ msg: "user does not exist" })

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
    delete user.password
    res.status(200).json({ token, user })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
