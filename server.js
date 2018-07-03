const express = require('express')
var app = express()
var server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

app.use(express.static(path.join(__dirname, '/node_modules')))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('keypress', (key) => {
    socket.emit('moveCircle', {
      direction: key
    })
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

const port = 3030
server.listen(port)
console.log('listening on port', port)
