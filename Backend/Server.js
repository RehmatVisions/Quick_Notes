import express from 'express'
import mongoose  from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'    
import connectDB from "./config/db.js"
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.route.js'
import noteRoutes from './routes/note.route.js'
dotenv.config();
const app = express()
//middlewares//
app.use(express.json());
app.use(cors(
  {
      origin:"http://localhost:5173",
    credentials:true
  }
));
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/v1/user',userRoutes)
app.use('/api/v1/note',noteRoutes)


const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Notes App Running in Backend')
})

connectDB().then(()=>{
    app.listen(port, () => {
  console.log(`server Running in this port ${port}`)
})
}).catch((error)=>{
    console.log( "mongodb conncetion faild due to",error)
})
