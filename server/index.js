const http = require('http');
const app = require('./src/app');
const { port } = require('./src/secrete');
const dbConnection = require('./src/db/dbconnection');


const server=http.createServer(app)

server.listen(port,()=>{
    console.log(`server runnig at port http://localhost:${port}`);
    dbConnection()
})