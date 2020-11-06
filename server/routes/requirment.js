import express from 'express'
import { requirmentMiddleware } from '../middleware'
import { handleError } from '../utils'

const app = express.Router()

// Muestra una pregunta
app.get('/:id', requirmentMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.requirment)
  } catch (error) {
      handleError(error, res)
  }
})

export default app
