import { Router, request } from 'express'
import CreateUserService from '../services/CreateUserService'
import ensureAuthenticated from '../middleware/ensureAuthenticated'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body
    const userService = new CreateUserService()

    const user = await userService.execute({ name, email, password })

    delete user.password

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

usersRouter.patch('/avatar', ensureAuthenticated, async (request, response) => {
  response.json({ ok: true })
})

export default usersRouter
