if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} 

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')
const ingredientsRouter = require('./routes/ingredients')
const pizzasRouter = require('./routes/pizzas')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout')
app.use(expressLayouts);
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/ingredients', ingredientsRouter)
app.use('/pizzas', pizzasRouter)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connected to db'))

app.listen(process.env.PORT || 8000, () => {
  console.log(`pizza parlor app listening on port ${process.env.PORT}`);
})