const express = require('express')
const bakery = express.Router()
const Bakery = require('../models/bakery.js')
const Recipe = require('../models/recipe.js')

// Index
bakery.get('/', async (req, res) => {
  const foundRecipes = await Recipe.find().lean()
  const foundBakery = await Bakery.find().limit(8).lean()
  console.log(foundBakery)
  res.render('index', {
    bakery: foundBakery,
    recipes: foundBakery,
    title: 'Index Page'
  })
})

// HomePage
bakery.get('/homepage', (req, res) => {
  Recipe.find()
  .then(foundRecipes => {
    res.render('HomePage', {
      recipes: foundRecipes
    })
  })
})

// About Us
bakery.get('/aboutus', (req, res) => {
  Recipe.find()
  .then(foundRecipes => {
    res.render('Aboutus', {
      recipes: foundRecipes
    })
  })
})


// New
bakery.get('/new', (req, res) => {
  Recipe.find()
  .then(foundRecipes => {
    res.render('new', {
      recipes: foundRecipes
    })
  })
})


// EDIT
bakery.get('/:id/edit', (req, res) => {
  Recipe.find()
  .then(foundRecipes => {
    Bakery.findById(req.params.id) 
    .then(foundBakery => { 
      res.render('edit', {
        bakery: foundBakery,
        recipes: foundRecipes
      })
    })
  })
})



// Show
bakery.get('/:id', (req, res) => {
    Bakery.findById(req.params.id)
    .populate('recipe')
        .then(foundBakery => {
          console.log(foundBakery)
          const bakedBy = foundBakery.getBakedBy()
          console.log(bakedBy)
            res.render('show', {
                bakery: foundBakery
            })
        })
})


// Create
bakery.post('/', (req, res) => {
    if (!req.body.image) {
    req.body.image = undefined
    }
    //console.log(req.body)
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bakery.create(req.body)
    res.redirect('/bakery')
})


// Update
bakery.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bakery.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBakery => {
      console.log(updatedBakery) 
      res.redirect(`/bakery/${req.params.id}`) 
    })
})



// Delete
bakery.delete('/:id', (req, res) => {
    Bakery.findByIdAndDelete(req.params.id)
        .then(deletedBakery => {
            res.status(303) .redirect('/bakery')
        })
})

module.exports = bakery



// Show
/*/ breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
    } else {
      res.render('404')
    }
}) */
