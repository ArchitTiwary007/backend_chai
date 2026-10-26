//**server creation**//

require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

//"/"=>most important!!

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('akkidotin')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login here</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai Aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
