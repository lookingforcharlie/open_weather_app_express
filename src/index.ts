import dotenv from 'dotenv'
import express from 'express'

// Load environment variables from .env file
dotenv.config()

const app = express()
const port = parseInt(process.env.PORT || '4750', 10) // ensure port is a number
const host = '0.0.0.0' // Listen on all network interfaces

app.get('/', (req, res) => {
  res.send('Hello open weather')
})

app.listen(port, host, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
