import express from 'express'
import { required, questionMiddleware } from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'
import { User } from '../models'

const app = express.Router()

// Muestra todas las preguntas
app.get('/', async (req, res) => {
  try {
    const questions = await question.findAll()
    res.status(200).json(questions)
  } catch (error) {
      handleError(error, res)
  }
})

// Muestra una pregunta
app.get('/:id', questionMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.question)
  } catch (error) {
      handleError(error, res)
  }
})

// Crear una pregunta
app.post('/', required, async (req, res) => {
  const { title, description, icon } = req.body
  const q = {
    title,
    description,
    icon,
    user: req.user._id
  }
  try {
    const savedQuestion = await question.create(q)
    res.status(201).json(savedQuestion)
  } catch (error) {
    handleError(error,res)
  }
})

// Crear respuesta a una pregunta
app.post('/:id/answers', required, questionMiddleware, async (req, res) => {
  const a = req.body
  const q = req.question
  a.createdAt = new Date()
  a.user = new User(req.user)
  try {
      const savedAnswer = await question.createAnswer(q, a)
      res.status(201).json(savedAnswer)
  } catch (error) {
    handleError(error, res)
  }
})

export default app
