// dependencies
const express = require('express')
const recipe = express.Router()
const Recipe = require('../models/seeds.js')
const recipeSeedData = require('../models/recipe_seed.js')

recipe.get('/data/seed', (req, res) => {
    Recipe.insertMany(recipeSeedData)
        .then(res.redirect('/bakery'))
})


// Index
recipe.get('/', (req, res) => {
    Recipe.find()
    .populate('bakery')
        .then(foundRecipes => {
            res.send(foundRecipes)
        })
})


// Show
recipe.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .populate({
            path: 'bakery',
            options: { limit: 5 }
        })
        .then(foundRecipe => {
            res.render('recipeShow', {
                recipe: foundRecipe
            })
        })
})


// Delete
recipe.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id) 
      .then(deletedRecipe => { 
        res.status(303).redirect('/bakery')
      })
})


// export
module.exports = recipe