// require mongoose
const mongoose = require('mongoose')

// creating shorthand for the Schema constructor
const { Schema } = mongoose

const mainSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://sallysbakingaddiction.com/wp-content/uploads/2019/12/homemade-artisan-main.jpg' },
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

// helper methods 
mainSchema.methods.getBakedBy = function(){
  return
    `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear}`
}


// model & export
const main = mongoose.model('main', mainSchema)
module.exports = main