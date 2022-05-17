import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import auth from '../routes/auth'

class App {
  private app: Application
  constructor (private port?: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
    process.env.TZ = 'Europe/Madrid'
  }

  private settings () {
    dotenv.config()
    this.app.set('port', process.env.PORT || this.port || 10008)
    this.app.set('trust proxy', true)
    this.app.set('api_def', '/api/v1/')
  }

  private middlewares () {
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(express.json({ limit: '50mb' }))
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }))
    this.app.use(express.static(path.join(__dirname, 'build')))
    this.app.use(express.static(path.resolve('build/uploads')))
  }

  private routes () {
    this.app.use(`${this.app.get('api_def')}auth`, auth)
  }

  public async start () {
    await this.app.listen(this.app.get('port'))
    console.log(`server runing on port : ${this.app.get('port')} `)
  }
}
export default App