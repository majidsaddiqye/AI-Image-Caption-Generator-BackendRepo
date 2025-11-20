require('dotenv').config()
const app = require('./src/app')
const connectDb = require('./src/db/db')

port = process.env.port


connectDb()
app.listen(port, ()=>{
    console.log(`server is listening on Port ${port}`)
})