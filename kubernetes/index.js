const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello Kubernetes !')
})

server.listen(3000, () => {
    console.log('Server is listening at PORT 3000')
})