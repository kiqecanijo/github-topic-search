import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000
app.listen(port, () => console.log(`💻 Done,Running server on: ${port} 😎`))
app.post('/', ({ body }, res) => {
  const { q, page, per_page } = body
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
