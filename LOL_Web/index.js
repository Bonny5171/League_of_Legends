const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('WEB WEB!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})