// Dependencies
const mongoose = require('mongoose')
const Bakery = require('./plant-life')
const { Schema } = mongoose
const Bread = require('./plant-life')

// Schema
const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String,
}, { toJSON: { virtuals: true }})


// Virtuals:
recipeSchema.virtual('bakery', {
    ref: 'Bakery',
    localField: '_id',
    foreignField: 'recipe'
})


//Hooks
recipeSchema.post('findOneAndDelete', function() {
  Bakery.deleteMany({ recipe: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})


// Model and Export
const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe