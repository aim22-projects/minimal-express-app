import express from 'express'

const app = express()

app.get('/', (req, res) => res.send(new Date()))

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Example app listening on port ${ port }`))