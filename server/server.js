import express from 'express'
import formidable from 'express-formidable'
import request from 'request'

const app = express()
app.use(formidable())

const port = 3000

const options = {
  method: 'GET',
  url: 'https://api.github.com/search/topics',
  qs: { q: 'sample' },
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
    'User-Agent': 'list-topics-app'
  }
}

app.listen(port, () => console.log(`´:{ Done !! running server on: ${port}`))

app.post('/', (req, res) => {
  req.fields.q
    ? request(options, function(error, response, body) {
        if (error) throw new Error(error)
        res.status(200).send(body)
      })
    : res.status(303).send('Magic word is required :(')
})

module.exports = app
