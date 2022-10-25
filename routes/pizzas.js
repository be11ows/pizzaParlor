const express = require('express')
const router = express.Router()

// get all pizzas
router.get('/', (req, res) => {
  res.send('get pizzas')
})

// add an pizza to db
router.post('/', (req, res) => {
  res.send('add pizza')
})

// edit pizza
router.put('/:id', (req, res) => {
  res.send('pizza edit')
})

// delete pizza
router.delete('/:id', (req, res) => {
  res.send('pizza delete')
})


module.exports = router