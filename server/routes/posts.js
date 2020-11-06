import express from 'express'
import { required, postMiddleware } from '../middleware'
import { post } from '../db-api'
import { handleError } from '../utils'

const app = express.Router()

app.get('/', async (req, res) => {
  try {
    const posts = await post.findAll()
    res.status(200).json(posts)
  } catch (error) {
      handleError(error, res)
  }
})

app.get('/:id', postMiddleware, async (req, res) => {
  try {
    res.status(200).json(req.post)
  } catch (error) {
      handleError(error, res)
  }
})

app.post('/', required, async (req, res) => {
  const { title, description, icon } = req.body
  const q = {
    title,
    description,
    icon,
    user: req.user._id
  }
  try {
    const savedPost = await post.create(q)
    res.status(201).json(savedPost)
  } catch (error) {
    handleError(error,res)
  }
})

export default app
