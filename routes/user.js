const express = require('express')
const router = express.Router() // Use the express.Router
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const { registerValidation, loginValidation } = require('../config/validation')

// register
router.post('/register', async (req, res) => {
   
    const { error } = registerValidation(req.body)
    
    if (error) return res.status(400).json({
        status: res.statusCode,
        message: error.details[0].message
    })

    const emailExist = await User.findOne({ email: req.body.email })
    
    if (emailExist) return res.status(400).json({
        status: res.statusCode,
        message: 'Email sudah digunakan'
    })


    const salt = await bcrypt.genSalt(10) // menambahkan data unik
    const hashPassword = await bcrypt.hash(req.body.password, salt) // hash password
    
    const user = new User({
        nama: req.body.nama,
        email: req.body.email,
        password: hashPassword,
    })

    try {
       
        const saveUser = await user.save()
      
        res.status(201).json({
            status: res.statusCode,
            message: 'Registrasi berhasil',
            data: saveUser
        })
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Registrasi gagal'
        })
    }
})

// login
router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body)
    if (error) return res.status(400).json({
        status: res.statusCode,
        message: error.details[0].message
    })

    
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).json({
        status: res.statusCode,
        message: 'Email kamu tidak terdaftar'
    })

    
    const validPwd = await bcrypt.compare(req.body.password, user.password);
    if(!validPwd) return res.status(400).json({
        status: res.statusCode,
        message: 'Password kamu salah'
    })
    
    
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
    
    res.header('Authorization', token).json({
        token: token

    })
})

module.exports = router