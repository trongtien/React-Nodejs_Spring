const http = require('http')
const app = require('./src/app')
const server = http.createServer(app)
const port = process.env.port

server.listen(port,err=>{
    if(err) throw err
    console.log(`server api connect: http://localhost:${process.env.port}`)
})

