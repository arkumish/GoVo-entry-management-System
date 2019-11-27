const express = require('express')
const app = express()
const port =process.env.PORT|| 3000;

app.get('/', (req, res) => res.send('Hello World this is arpit!'))

app.get('/testing1', (req, res) => res.send('Hello World this is arpit!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))