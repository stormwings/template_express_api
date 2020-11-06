import { requirment } from '../db-api'
import { handleError } from '../utils'

export const requirmentMiddleware = async (req, res, next) => {
  try {
    req.requirment = await requirment.findById(req.params.id)
    next()
  } catch (err) {
    handleError(err, res)
  }
}
