const {Router} = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')

const User = require('../models/User')

router.post(
  '/register',
  [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Minimum password length 6 characters').isLength({min: 6})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) return res.status(400).json({errors: errors.array(), message: 'Incorrect data'})

      const {email, password} = req.body

      const exists = await User.findOne({email})

      if (exists) return res.status(400).json({message: 'This user already exists'})

      const hashed = await bcrypt.hash(password, 12)
      const user = new User({email, password: hashed})

      await user.save()

      res.status(400).json({message: 'User created'})
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, please try again'})
    }
  })

router.post(
  '/login',
  [
    check('email', 'Invalid email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) return res.status(400).json({errors: errors.array(), message: 'Incorrect data'})

      const {email, password} = req.body

      const user = await User.findOne({email})

      if (!user) return res.status(400).json({message: 'User is not found'})

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) return res.status(400).json({message: 'Invalid data'})

      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      )

      res.json({token, userId: user.id})
    } catch (e) {
      res.status(500).json({message: 'Something went wrong, please try again'})
    }
  })

module.exports = router
