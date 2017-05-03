const express = require('express')
const app = express()

const articles = [{'title': 'read-later'}]

app.get('/articles', (req, res, next) => {
  res.send(articles)
})

app.post('/articles', (req, res, next) => {
  res.send('ok')
})

app.get('/articles/:id', (req, res, next) => {
  const id = req.params.id
  console.log(`FETCHING THE ID  ${id}`)
  res.send(articles[id])
})

app.delete('/articles/:id', (req, res, next) => {
  const id = req.params.id
  console.log(`Deleting article with {id}`)
  delete articles[id]
  res.send({message: 'DeletedG'})
})

app.listen(5050)
module.exports = app
