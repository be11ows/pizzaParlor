const express = require('express')
const router = express.Router()

// get all ingredients
router.get('/', (req, res) => {
  res.send('get ingredients')
})

// add an ingredient to db
router.post('/', (req, res) => {
  res.send('add ingredient')
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