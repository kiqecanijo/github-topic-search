import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

const port = 3000
app.listen(port, () => console.log(`💻 Done,Running server on: ${port} 😎`))
app.get('/', (req, res) => {
  const { q, page, per_page } = req.query
  q || res.status(301).send('🚫 q value necesary for this request')
  // check q required value
  axios
    .get('https://api.github.com/search/topics', {
      params: {
        q,
        page,
        per_page
      },
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json'
      }
    })
    .then(({ data }) => res.status(200).send(data))
    .catch(error =>
      res.status(405).send('❎ unespected error sending request 😵')
    )
})
