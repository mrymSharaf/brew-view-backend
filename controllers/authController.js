const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const SECRET = process.env.SECRET

exports.register = async (req, res) => {
    try {
        const { username, password } = req.body

        const existing = await User.findOne({ username })
        if (existing) {
            return res.status(400).json({ message: 'Username already exists' })
        }

        const passwordHash = await bcrypt.hash(password, 8)

        const newUser = new User({ username, passwordHash })
        await newUser.save()

        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const isValid = await user.validatePassword(password)
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const payload = {
            id: user._id,
            username: user.username,
            role: user.role
        }
        const token = jwt.sign(payload, SECRET, { expiresIn: '1h' }) 
        res.json({ token })
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}