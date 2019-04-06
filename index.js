const express = require("express")
const app = express()
const morgan = require("morgan");
require("dotenv").config()
const mongoose = require("mongoose")
const expressjwt = require("express-jwt")
const Port = process.env.Port || 6669

app.use(morgan("dev"));
app.use(express.json())
app.use('/token', expressjwt({ secret: process.env.SECRET }))

mongoose.set("useCreateIndex", true)
mongoose.connect("mongodb://localhost:27017/news",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err
        console.log("connected to database!")
    }
)

app.use('/auth', require('./routes/auth'))
app.use('/token/news', require('./routes/news'))

app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(Port, () => {
    console.log(`[+] Starting server on port ${Port}`)
})