const express = require('express');
const Restaurante = require('../Models/restaurantes');
const router = express.Router();

router.get('/', async(req, res) => {
    const restaurante = await Restaurantes.find().populate('restaurante');
    res.json(restaurante);
});

router.post('/', async (req, res) => {
    const restaurante = new Restaurante(req.body);
    await restaurante.save();
    res.status(201).json(restaurante);
   });

router.put('/:id', async (req, res) => {
    const restaurante = await Restaurante.findByIdAndUpdate(req.params.id, req.body, {
   new: true });
    res.json(restaurante);
   });

router.delete('/:id', async (req, res) => {
    await Restaurante.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Restaurante apagado' });
   });
   
module.exports = router;