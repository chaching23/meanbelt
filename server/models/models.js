const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const PetSchema = new mongoose.Schema({

  id:  Number, 
  name:  { type: String, required: [true, "name must be provided."], minlength: [3, "Name must be at least 3 characters long."], unique:true}, 
  qty: { type: Number, required: [true, "qty must be provided."], min: [0, "product must be greater than or equal to 0"]},
  price: { type: Number, required: [true, "price must be provided."], min: [0, "product must be greater than or equal to 0"]}

  }, 
  {timestamps: true});

  PetSchema.plugin(uniqueValidator, {message: 'error, Name is already taken'});


mongoose.model('Pet', PetSchema); 