import { post } from '../db-api'
import { handleError } from '../utils'

export const postMiddleware = async (req, res, next) => {
  try {
    req.post = await post.findById(req.params.id)
    next()
  } catch (err) {
    handleError(err, res)
  }
}
