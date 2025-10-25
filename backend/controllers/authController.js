const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Auth = require('../models/auth')

//creating a signup logic
exports.signUpUser = async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.json({ message: 'fill the required fields' })
  }
  try {
    const userExist = await Auth.findOne({ email })
    if (userExist) return res.status(400).json({ message: 'User already exist' })
    //hashing the password first if the user does not exist then create the new user
    const hashPass = await bcrypt.hash(password, 10)
    const user = await Auth.create({ username, email, password: hashPass })
    //generate token
    const authToken = jwt.sign({
      id: user._id, role: user.role
    },
      process.env.JWT_SECRET,
      { expiresIn: '2d' }
    );
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token: authToken,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//creating the signin logic
exports.signInUser = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.json({ message: "Fill the quired field" })
  }
  try {
    const user = await Auth.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })
    //compare passwords if user found
    const passMatch = await bcrypt.compare(password, user.password)
    if (!passMatch) return res.status(401).json({ message: 'Invalid credentials' })
    //generate token if passord matches
    const authToken = jwt.sign({
      id: user._id, role: user.role
    },
      process.env.JWT_SECRET,
      { expiresIn: '2d' }
    );
    res.status(201).json({
      success: true,
      message: 'User logged successfully',
      token: authToken,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}