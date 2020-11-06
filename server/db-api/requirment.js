import Debug from 'debug'
import { Requirment } from '../models'

const debug = new Debug('ans-me:db-api:requirment')

export default {
  findById: (_id) => {
    debug(`Find requirment with id ${_id}`)
    return Requirment
      .findOne({ _id })
      .populate('visa')
  },
}
