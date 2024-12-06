const mongoose = require('mongoose');

const PratoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true, min: 0 },
    restaurante: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurante' },
   });

module.exports = mongoose.model('Prato', PratoSchema);