const express = require('express')
const router = express.Router()
const Ingredient = require('../models/ingredient');

// get all ingredients
router.get('/', (req, res) => {
  res.render('ingredients/index')
})

// add an ingredient to db
router.get('/new', (req, res) => {
  res.send('ingredients/new')
})

// add an ingredient to db
router.post('/', (req, res) => {
  res.send('create')
})

// edit ingredient
router.put('/:id', (req, res) => {
  res.send('ingredient edit')
})

// delete ingredient
router.delete('/:id', (req, res) => {
  res.send('ingredient delete')
})

module.exports = router