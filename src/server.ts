import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3838

// Middleware
app.use(express.json())

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json(555)
})

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
