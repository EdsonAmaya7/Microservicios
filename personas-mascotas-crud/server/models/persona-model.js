const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mascota = new Schema({
  pet_name: { type: String, required: true },
  pet_image: { type: String, required: true },
});

const Persona = new Schema(
  {
    name: { type: String, required: true },
    last: { type: String, required: true },
    image: { type: String, required: true },
    pet_name: { type: String, required: true },
    pet_image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("personas", Persona);
