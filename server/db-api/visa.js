import Debug from 'debug'
import { Visa } from '../models'

const debug = new Debug('ans-me:db-api:question')

export default {
  findAll: () => {
    debug('Finding all visas')
    return Visa.find()
  },
}
