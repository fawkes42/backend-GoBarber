import express from 'express'
import routes from './routes'
import uploadConfig from './config/upload'

import 'reflect-metadata'
import './database'

const app = express()

app.use(express.json())
app.use(routes)
app.use('/files', express.static(uploadConfig.directory))

app.listen(3333, () => {
  console.log('Server started with success on port 3333.')
})
