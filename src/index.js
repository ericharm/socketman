var socket = window.io()

var handleKeyPress = (event) => {
  socket.emit('keypress', event.key)
}

document.addEventListener('keypress', handleKeyPress)

// stage
let stage = new window.createjs.Stage('stage-canvas')
let circle = new window.createjs.Shape()
circle.x = 100
circle.y = 100
circle.graphics.beginFill('#000000').drawCircle(10, 10, 100)
stage.addChild(circle)
stage.update()

const movements = {
  'w': { x: 0, y: -1 },
  'a': { x: -1, y: 0 },
  's': { x: 0, y: 1 },
  'd': { x: 1, y: 0 }
}

const speed = 20

socket.on('moveCircle', (data) => {
  circle.x += movements[data.direction].x * speed
  circle.y += movements[data.direction].y * speed
  stage.update()
})
