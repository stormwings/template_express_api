import Debug from 'debug'
import { Profile } from '../models'

const debug = new Debug('ans-me:db-api:post')

export default {
  findById: (_id) => {
    debug(`Find profile with id ${_id}`)
    return Profile
      .findOne({ _id })
      .populate('user')
  },

  create: (p) => {
    debug(`Creating new profile ${p}`)
    const profile = new Profile(p)
    return profile.save()
  },

  update: (p) => {
    debug(`Updating new profile ${p}`)
    const filter = { _id: p._id };
    const update = { ...p };

    return Profile
      .findOneAndUpdate(filter, update)
  },
}
