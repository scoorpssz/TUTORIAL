const express = require('express');
const Prato = require('../Models/pratos');
const router = express.Router();

router.get('/', async(req, res) => {
    const prato = await Prato.find().populate('restaurante');
    res.json(prato);
});

router.post('/', async (req, res) => {
    const prato = new Prato(req.body);
    await prato.save();
    res.status(201).json(prato);
   });

router.put('/:id', async (req, res) => {
    const prato = await Prato.findByIdAndUpdate(req.params.id, req.body, {
   new: true });
    res.json(prato);
   });

router.delete('/:id', async (req, res) => {
    await Prato.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Prato apagado' });
   });
   
module.exports = router;