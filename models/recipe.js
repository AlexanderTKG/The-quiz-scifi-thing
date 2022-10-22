// Dependencies
const mongoose = require('mongoose')
const Bakery = require('./bakery')
const { Schema } = mongoose
const Bread = require('./bakery')

// Schema
const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
}, { toJSON: { virtuals: true }})


// Virtuals:
<<<<<<< HEAD:models/baker.js
bakerSchema.virtual('bakery', {
    ref: 'Bakery',
=======
recipeSchema.virtual('breads', {
    ref: 'Bread',
>>>>>>> 8e5dd6784bbcf8abf6f9cb00e370fdc2265e7efe:models/recipe.js
    localField: '_id',
    foreignField: 'recipe'
})


//Hooks
<<<<<<< HEAD:models/baker.js
bakerSchema.post('findOneAndDelete', function() {
  Bakery.deleteMany({ baker: this._conditions._id })
=======
recipeSchema.post('findOneAndDelete', function() {
  Bread.deleteMany({ recipe: this._conditions._id })
>>>>>>> 8e5dd6784bbcf8abf6f9cb00e370fdc2265e7efe:models/recipe.js
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})


// Model and Export
const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe