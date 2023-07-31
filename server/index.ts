const log = console.log
const http = require('http').createServer()
const io = require('socket.io')(http, {  
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})
const port = 8080

http.listen(port, () => log(`server listening on port: ${port}`))

io.on('connection', (socket: any) => {
    log('connected')
    socket.on('message', (evt: any) => {
        log(evt)
        socket.broadcast.emit('message', evt)
    })
})

io.on('disconnect', (evt: any) => {
    log('some people left')
})