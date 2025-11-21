const express = require ('express')
const authRouter = require('../src/routes/auth.routes')
const postRouter = require('../src/routes/post.routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));


app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)



module.exports = app