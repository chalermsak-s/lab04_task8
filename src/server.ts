import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import bookRoute from './routes/bookRoute'
import authorRoute from './routes/authorRoute'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3838

// Middleware
app.use(express.json())

// Routes
app.use('/books', bookRoute)
app.use('/authors', authorRoute)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
