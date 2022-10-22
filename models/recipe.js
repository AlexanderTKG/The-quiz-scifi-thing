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
recipeSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'recipe'
})


//Hooks
recipeSchema.post('findOneAndDelete', function() {
  Bread.deleteMany({ recipe: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})


// Model and Export
const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe