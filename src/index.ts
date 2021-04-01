import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(String(process.env.DATABASE_KEY), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(PORT, () => console.log(`Entrou na API ${PORT}`))

export default app
