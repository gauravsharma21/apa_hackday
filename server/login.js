require('./db/mongoose')
const express = require('express')
const app = express()
app.use(express.json())
const User = require('./models/users')
const Spots = require('./models/spots')
const data = require('./data.json')
const PORT = process.env.PORT
app.post('/login', (req, res) => {
    User.findbycreds(req.body.PIS, req.body.DOB, (err, response) => {
        if (err)
            return res.send(err)
        res.send("Successfull login")
    })
})
app.post('/spots/add', async (req, res) => {
    try {
        const spot = new Spots(req.body)
        await spot.save()
        res.status(201).send(spot)
    }
    catch (e) {
        res.send(e)
    }
})
app.get('/spots', async (req, res) => {
    try {
        const spots = await Spots.find({})
        res.send(spots)
    }
    catch (e) {
        res.send(e)
    }
})
app.get('/info', async (req, res) => {
    res.send(data)
})
app.listen(PORT, () => {
    console.log("The server is up on port " + PORT)
})