// Dependencies
const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// Routes
app.get('/', (req, res) => {
    res.render('HomePage')
})

// Bakery
const bakeryController = require('./controllers/plant-life_controller.js')
app.use('/bakery', bakeryController)

// Recipes
const recipesController = require('./controllers/seeds_controller.js')
app.use('/recipes', recipesController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

// Listen
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})



