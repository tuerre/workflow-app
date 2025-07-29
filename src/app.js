import "dotenv/config";

import morgan from 'morgan'
import express from 'express'
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.router.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app;