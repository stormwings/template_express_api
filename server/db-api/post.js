import Debug from 'debug'
import { Post, Question, Answer } from '../models'

const debug = new Debug('ans-me:db-api:post')

export default {
  findAll: () => {
    debug('Finding all posts')
    return Post.find().populate('posts')
  },

  findById: (_id) => {
    debug(`Find post with id ${_id}`)
    return Post
      .findOne({ _id })
      .populate('user')
  },

  create: (p) => {
    debug(`Creating new post ${p}`)
    const post = new Post(p)
    return post.save()
  },
}
