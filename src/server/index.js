const dotenv = require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

const PORT = 3000

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'))
})

app.post('/test', async (req, res) => {
    //here i've saved the api base url and the api key in the .env file
    let response = await fetch(`${process.env.API_URL}?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`)
    var data = await response.json()
    if (data && data.status.code === '0') res.send(data)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
