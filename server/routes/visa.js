import express from 'express'
import { visa } from '../db-api'
import { handleError } from '../utils'

const app = express.Router()

app.get('/', async (req, res) => {
  try {
    const visas = await visa.findAll()
    res.status(200).json(visas)
  } catch (error) {
      handleError(error, res)
  }
})

export default app
