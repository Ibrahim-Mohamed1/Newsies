const express = require("express")
const newsRouter = express.Router()
const News = require("../models/news")

newsRouter.post('/', (req, res, next) => {
    const news = new News (req.body)
    news.user = req.user._id
    news.save(function (err, newNews) {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newNews)
    })
})

newsRouter.delete("/:newsId", (req, res, next) => {
    News.findOneAndRemove({ _id: req.params.newsId, user: req.user._id}, (err, news) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(news)
    })
})

module.exports = newsRouter