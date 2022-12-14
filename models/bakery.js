// require mongoose
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor
const { Schema } = mongoose

const bakerySchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/12/homemade-artisan-bakery.jpg' },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }
})

// helper methods 
bakerySchema.methods.getBakedBy = function(){
  return
    `${this.name} was baked with love by ${this.recipe.name}, who has been with us since ${this.recipe.startDate.getFullYear}`
}


// model & export
const Bakery = mongoose.model('Bakery', bakerySchema)
module.exports = Bakery