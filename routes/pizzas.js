const express = require('express')
const router = express.Router()
const Pizza = require('../models/pizza');

// get all pizzas
router.get('/', (req, res) => {
  res.send('get pizzas')
})

// add a pizza to db
router.post('/', (req, res) => {
  res.send('add pizza')
})

// display pizza
router.get('/:id', (req, res) => {
  res.send('display a pizza');
})

// edit pizza
router.put('/:id/edit', (req, res) => {
  res.send('pizza edit')
})

// delete pizza
router.delete('/:id', (req, res) => {
  res.send('pizza delete')
})


module.exports = router