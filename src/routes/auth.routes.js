import { Router } from 'express'
import validate from '../middlewares/validatorMiddleware.js'
import { authRequired } from '../middlewares/validateToken.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'
import { login, register, logout, profile } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', validate(registerSchema), register)

router.post('/login', validate(loginSchema), login)

router.post('/logout', logout)

router.get('/profile', authRequired, profile)

export default router
