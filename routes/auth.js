const express = require("express")
const User = require("../models/user")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

authRouter.post('/signup', (req, res, next) => {
    User.findOne({ username: req.body.username}, (err, existingUser) => {
        if (err) {
            res.status(509)
            return next(err)
        } else if (existingUser !== null) {
            res.status(400)
            return next(new Error("That username already exists"))
        }
        const newUser = new User (req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({success: false, err})
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({ user: user.toObject(), token})
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err)
        if (!user) {
            console.log(user)
            res.status(403)
            return next(new Error("Username or password is incorrect!"))
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) return res.status(401).send({ success: false, message: "Username or password is incorrect!"})
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.send({ token: token, user: user.withoutPassword(), success: true})
        })
    })
})

module.exports = authRouter