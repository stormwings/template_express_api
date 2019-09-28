import http from 'http'
import Debug from 'debug'
import app from './app'
import mongoose from 'mongoose'
import { mongoUrl } from './config'

const PORT = 3000
const debug = new Debug('ansme:root')

async function start() {
  mongoose.connect(mongoUrl)

  app.listen(PORT, () => {
    debug(`Server running at ${PORT}`)
  })
}

start()
