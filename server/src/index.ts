import express, { Request, Response } from 'express'
import cors from 'cors'
import { samplePets } from './data'

const app = express()

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173']
  })
)

app.get('/api/pets', (req: Request, res: Response) => {
  res.json(samplePets)
})
const PORT = 3001

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})