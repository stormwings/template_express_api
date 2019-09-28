import express from 'express'
import bodyParser from 'body-parser' // para leer los datos que vengan con el request desde el frontend
import { question, auth } from './routes'

const app = express()

//para leer la parte del request
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
//

if (process.env.NODE_ENV === 'development') { // para pedir que otro sitio pida recursos en modo de desarrollo
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS')
    next()
  })
}

app.use('/api/questions', question)
app.use('/api/auth', auth)

export default app
