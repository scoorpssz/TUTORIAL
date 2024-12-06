const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    localizacao: String,
   });

module.exports = mongoose.model('Restaurante', RestauranteSchema);