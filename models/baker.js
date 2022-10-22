// Dependencies
const mongoose = require('mongoose')
const Bakery = require('./bakery')
const { Schema } = mongoose
const Bread = require('./bakery')

// Schema
const bakerSchema = new Schema({
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
bakerSchema.virtual('bakery', {
    ref: 'Bakery',
    localField: '_id',
    foreignField: 'baker'
})


//Hooks
bakerSchema.post('findOneAndDelete', function() {
  Bakery.deleteMany({ baker: this._conditions._id })
      .then(deleteStatus => {
          console.log(deleteStatus)
      })
})


// Model and Export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker