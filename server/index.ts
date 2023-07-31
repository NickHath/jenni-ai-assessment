const http = require('http').createServer()
const io = require('socket.io')(http, {  
  cors: {
    origin: 'https://jenni-ai-assessment.vercel.app:3000',
    methods: ['GET', 'POST']
  }
})
const port = 8080

http.listen(port, () => console.log(`Server listening on port: ${port}`))

io.on('connection', (socket: any) => {
    console.log('client connected')
    socket.on('message', (evt: string) => {
        console.log(evt)
        socket.broadcast.emit('message', evt)
    })
})

io.on('disconnect', (evt: string) => {
    console.log('some people left')
})