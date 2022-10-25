// eslint-disable-next-line
const path = require('path')
// eslint-disable-next-line
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, './build')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
