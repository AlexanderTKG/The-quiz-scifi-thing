const express = require('express')
const bakery = express.Router()
const Bakery = require('../models/bread.js')
const Baker = require('../models/baker.js')

// Index
bakery.get('/', async (req, res) => {
  const foundBakers = await Baker.find().lean()
  const foundBreads = await Bakery.find().limit(8).lean()
  console.log(foundBakery)
  res.render('index', {
    breads: foundBakery,
    bakers: foundBakery,
    title: 'Index Page'
  })
})


// New
bakery.get('/new', (req, res) => {
  Baker.find()
  .then(foundBakers => {
    res.render('new', {
      bakers: foundBakers
    })
  })
})


// EDIT
bakery.get('/:id/edit', (req, res) => {
  Baker.find()
  .then(foundBakers => {
    Bakery.findById(req.params.id) 
    .then(foundBakery => { 
      res.render('edit', {
        bakery: foundBakery,
        bakers: foundBakers
      })
    })
  })
})


// Show
bakery.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
    .populate('baker')
        .then(foundBakery => {
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
    Bread.create(req.body)
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
