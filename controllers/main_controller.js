const express = require('express')
const main = express.Router()
const Main = require('../models/main.js')
// const Baker = require('../models/baker.js')

// Index
main.get('/', async (req, res) => {
  // const foundBakers = await Baker.find().lean()
  const foundMain = await Main.find().limit(8).lean()
  console.log(foundMain)
  res.render('index', {
    main: foundMain,
    // bakers: foundBakers,
    title: 'Index Page'
  })
})


// New
// main.get('/new', (req, res) => {
//   Baker.find()
//   .then(foundBakers => {
//     res.render('new', {
//       bakers: foundBakers
//     })
//   })
// })


// // EDIT
// main.get('/:id/edit', (req, res) => {
//   Baker.find()
//   .then(foundBakers => {
//     Main.findById(req.params.id) 
//     .then(foundMain => { 
//       res.render('edit', {
//         main: foundMain,
//         // bakers: foundBakers
//       })
//     })
//   })
// })


// // Show
// main.get('/:id', (req, res) => {
//     Bread.findById(req.params.id)
//     .populate('baker')
//         .then(foundBread => {
//           const bakedBy = foundBread.getBakedBy()
//           console.log(bakedBy)
//             res.render('show', {
//                 bread: foundBread
//             })
//         })
// })


// Create
main.post('/', (req, res) => {
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
    res.redirect('/main')
})


// // Update
// main.put('/:id', (req, res) => {
//   if(req.body.hasGluten === 'on'){
//     req.body.hasGluten = true
//   } else {
//     req.body.hasGluten = false
//   }
//   Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
//     .then(updatedBread => {
//       console.log(updatedBread) 
//       res.redirect(`/main/${req.params.id}`) 
//     })
// })



// // Delete
// main.delete('/:id', (req, res) => {
//     Bread.findByIdAndDelete(req.params.id)
//         .then(deletedBread => {
//             res.status(303) .redirect('/main')
//         })
// })

module.exports = main