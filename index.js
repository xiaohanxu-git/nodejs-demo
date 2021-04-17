const http = require('http')
const os = require('os')

const hostname = os.hostname()
const localhost = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`Hello World from ${hostname}`)
})

server.listen(port, localhost, () => {
  console.log(`Server running at http://${localhost}:${port}/`)
})
