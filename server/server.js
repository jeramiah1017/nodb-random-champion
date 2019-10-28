require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controller/controller')

const app = express()

app.use(express.json())


// const championApi = "/api/favs"
// app.post('/api/favs', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });
app.post('/api/favs', ctrl.fav)
app.get('/api/favs', ctrl.getFav)
app.put('/api/favs/:id', ctrl.newSkin)
app.delete('/api/favs/:id', ctrl.delete)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} a full moon tonight` ))